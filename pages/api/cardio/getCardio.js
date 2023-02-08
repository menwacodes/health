import mongoConnect from '../../../lib/mongo-connect.js';

export async function getCardio() {
    const client = await mongoConnect();
    const db = client.db();
    const collection = db.collection("cardios");

    return await collection.find({}).sort({date: -1}).toArray();
}

export default async function handler(req, res) {
    const cardio = await getCardio();
    res.status(200).json(cardio)
}