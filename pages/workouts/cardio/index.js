import CardioForm from "../../../components/Cardio/CardioForm.js";
import CardioHistory from "../../../components/Cardio/CardioHistory.js";
import {getCardio} from '../../api/cardio.js';
import classes from './Cardio.module.scss';
import {getSession} from "next-auth/react";

import mongoConnect from '../../../lib/mongo-connect.js';

function CardioPage({cardio, auth}) {
    // if empty cardio, return "no cardio" message
    // if empty cardio && authorized is no, return auth message

    if (!auth) return <h1 className={"center-text"}>Not authorized</h1>

    const cardioHistoryItems = cardio.map(c => <CardioHistory key={c._id} cardio={c}/>);
    return (
        <>
            <CardioForm/>
            <h2 className={"center-text"}>History</h2>
            <div className={"flex-center"}>
                <article className={classes.history__grid}>
                    {cardioHistoryItems}
                </article>
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession({req: context.req})
    console.log(session)

    const email = "mikeobw@gmail.com";
    let auth = true;
    let cardio;

    // Get role from email
    const client = await mongoConnect();
    const db = client.db();
    const collection = db.collection("users");
    const userData = await collection.find({email}).toArray();

    // no user guard
    if (userData.length === 0) auth = false;

    // no admin guard
    if (auth && userData.at(0).role === "admin") {
        console.log(userData.at(0).role);
        const cardioData = await getCardio();
        cardio = JSON.parse(JSON.stringify(cardioData));

    } else {
        console.log("No dice");
        auth = false
        cardio = []
    }

    // const cardio = cardioData
    return {props: {cardio, auth}};
}

export default CardioPage;