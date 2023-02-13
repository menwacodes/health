import mongoConnect from "../../../lib/mongo-connect.js";

export default async function handler(req, res) {
    if (req.method !== "POST") res.status(501).json({message: "Route not implemented"});

    const {
        date,
        timeOfDay,
        notes,
        systolic1,
        diastolic1,
        pulse1,
        systolic2,
        diastolic2,
        pulse2
    } = req.body;

    // connect to db
    const client = await mongoConnect();
    const db = client.db();
    const collection = db.collection("bp");

    // create record
    const bpData = await collection.insertOne({
        date: new Date(date),
        timeOfDay,
        notes,
        systolic1,
        diastolic1,
        pulse1,
        systolic2,
        diastolic2,
        pulse2,
        createdAt: new Date()
    });

    return res.status(201).json({message: "BP Created", data: bpData})
}