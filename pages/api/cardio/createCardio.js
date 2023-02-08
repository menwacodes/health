import mongoConnect from '../../../lib/mongo-connect.js';

export default async function createCardio(req, res) {
    if (req.method !== "POST") return;
    const {
        date,
        exerciseTime,
        avgBPM,
        minHR,
        maxHR,
        equipment,
        notes
    } = req.body;

    // connect to db
    const client = await mongoConnect();
    const db = client.db();
    const collection = db.collection("cardios")

    // create record
    const cardioData = await collection.insertOne({
        date: new Date(date),
        exerciseTime,
        avgBPM,
        minHR,
        maxHR,
        equipment,
        notes,
        createdAt: new Date()
    })

    return res.status(201).json({message: "Cardio Created", data: cardioData})
}