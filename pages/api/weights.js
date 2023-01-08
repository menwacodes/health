import mongoConnect from '../../lib/mongo-connect.js';

export async function getWeights() {
    const client = await mongoConnect();
    const db = client.db();
    const collection = db.collection("weights");

    return await collection.find().toArray();
}

export default async function handler(req, res) {
    const weights = await getWeights();
    res.status(200).json(weights)
}