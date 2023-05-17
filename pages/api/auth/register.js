import connectMongoose from "@/database/db";
import UserModel from "@/database/models/userModel";
import {userExists, hashPassword} from "@/database/services/userService";

export default async function handler(req, res) {
    await connectMongoose();

    if (req.method === "POST") {
        const {email, password} = req.body;

        // check user exists
        if (await userExists(email)) return res.status(422).json({message: "User Exists", fail: true});

        // hash pw
        const hashedPw = await hashPassword(password);

        // save user
        try {
            const user = await UserModel.create({email, password: hashedPw});
            return res.status(201).json({message: "success", data: user});
        }
        catch (error) {
            console.error(error)
            return res.status(500).json({message: "fail", data: error})
        }
    }
}