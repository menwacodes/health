import nc from 'next-connect';
import mongoConnect from "@/lib/mongo-connect";
import checkAuth from "../../../database/middleware/checkAuth.js";
import {findUserByEmail} from "@/database/services/userService";

const handler = nc();
handler.use(checkAuth).get(async (req, res) => {
    try {
        await mongoConnect();
        // get user
        const user = await findUserByEmail(req.session.user.email, { password: 0 });
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: "Fail" });
    }
});
export default handler;