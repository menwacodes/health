import email from "../../lib/getemail.js";
import mongoConnect from '../../lib/mongo-connect.js';

export async function getuser(email) {
    console.log("GET USER: " + email)
    const client = await mongoConnect();
    const db = client.db();
    const collection = db.collection("users");

    // return await collection.find({email: email}).sort({date: -1}).toArray();
    return await collection.find({email: email}).toArray();
}

export default async function handler(req, res) {

    // const user = await getUser(email)
    // return res.status(200).json({user})
    console.log(`EMAIL: ${email}`)
    return res.status(200).json({message: "Hi"})
}