import {hashPassword} from "../../../lib/authHelper.js";
import mongoConnect from "../../../lib/mongo-connect.js";

/*
    API needs email, password added to body
    Todo: API needs to be commented out for production
 */
export default async function handler(req, res) {
    if (req.method !== "POST") return;

    const {active, email, name, password, role} = req.body;

    // validate sent data
    if (!email || !email.includes("@" || !password || password.trim().length < 6)) {
        return res.status(422).json({message: "Invalid Input"});
    }

    const client = await mongoConnect();
    const db = client.db();

    // See if user already exists
    const existingUser = await db.collection("users").findOne({email: email});
    if (existingUser) {
        await client.close();
        return res.status(422).json({message: "User exists"});
    }

    // secure password
    const hashedPassword = await hashPassword(password);

    // create user
    const result = await db.collection("users").insertOne({
        active,
        email,
        name,
        password: hashedPassword,
        role
    });

    await client.close();
    return res.status(201).json({message: "Created user"});
}
