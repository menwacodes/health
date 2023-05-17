import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {passwordsEqual, findUserByEmail} from "@/database/services/userService";
import connectMongoose from "@/database/db";

export const authOptions = {
    session: {
        secret: "heHad5zml2XeQtAaq5w7CFWEmGesvhhkmMaup1twHN4",
        jwt: true
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                await connectMongoose();
                // get user
                const user = await findUserByEmail(credentials.email, {});
                // check user exists
                if (!user) {
                    throw new Error("Email bad")
                }
                // check password
                if (!await passwordsEqual(credentials.password, user.password)) {
                    throw new Error("Pass bad")
                }

                // user good
                return {email: user.email}
            }
        })
    ]
}

export default NextAuth(authOptions);