import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"; // can this be without extension?
import {passwordsEqual} from "../../../lib/authHelper.js";
import mongoConnect from "../../../lib/mongo-connect.js";

let userAccount = null;

const nextAuthConfig = {
    cookie: {secure: process.env.NODE_ENV && process.env.NODE_ENV === 'production'},
    session: {
        jwt: true,
        maxAge: 30 * 24 * 3600
    },
    providers: [
        CredentialsProvider({
            id: "credentials", // used in frontend signin method to identify this provider
            name: "credentials",

            async authorize(credentials) { // credentials will hold the user/pwd sent from frontend
                // is there a user

                const client = await mongoConnect();
                const usersCollection = client.db().collection("users");
                const user = await usersCollection.findOne({email: credentials.enteredEmail});
                if (!user) {
                    await client.close();
                    throw new Error("No User Found");
                }
                // console.log(credentials.enteredPassword)
                // console.log(user.password)

                // is their password correct
                const passwordGood = await passwordsEqual(credentials.enteredPassword, user.password);
                console.log(passwordGood)
                if (!passwordGood) {
                    console.log("in bad pw")
                    await client.close();
                    throw new Error("Bad Pw");
                }

                // user exists and password is good
                // put only relevant stuff into userAccount object
                console.log(user.email)
                userAccount = {
                    id: user._id,
                    email: user.email,
                    role: user.role,
                    name: user.name
                    // name: user.name,
                    // active: user.active
                }
                await client.close();
                console.log("In ...[nextauth], userAccount ⬇️")
                console.log(userAccount)
                return userAccount;
            }
        })
    ],
    callbacks: {
        async signIn(user, account, profile, email, credentials) {
            try {
                // user object is wrapped in another user object
                user = user.user;
                console.log(`Signin callback for: ${user}}`)
                console.log(`User email: ${user.email}, role: ${user.role}`)
                if (typeof user.email !== typeof undefined) {
                    return user;
                } else {
                    console.log("No user found")
                    return false;
                }
            } catch (e) {
                console.error(`Signin callback error: ${e}`)
            }
        }
        ,
        async session(session, token) {
            if (userAccount !== null) {
                // session.user = userAccount
                session.user = {
                    email: userAccount.email,
                    role: userAccount.role
                };
            } else if (typeof token.user !== typeof undefined && (typeof session.user === typeof undefined
                || (typeof session.user !== typeof undefined && typeof session.user.userId === typeof undefined))) {
                session.user = token.user
            } else if (typeof token !== typeof undefined) {
                session.token = token
            }
            return session
        },
        // async jwt(token, user, account, profile, isNewUser) {
        //     console.log(`JWT callback. Got user: ${user}`)
        //     if (typeof user !== typeof undefined) {
        //         token.user = user
        //     }
        //     return token
        // }
    }
};

export default (req, res) =>  NextAuth(req, res, nextAuthConfig);