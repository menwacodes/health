import {useState} from "react";
import CardioForm from "../../../components/Cardio/CardioForm.js";
import CardioHistory from "../../../components/Cardio/CardioHistory.js";
import {getCardio} from '../../api/cardio/getCardio.js';
import classes from './Cardio.module.scss';
import {getSession} from "next-auth/react";
import {getServerSession} from "next-auth";

import mongoConnect from '../../../lib/mongo-connect.js';

function CardioPage({cardio, auth}) {
    // if empty cardio, return "no cardio" message
    // if empty cardio && authorized is no, return auth message

    const [cardioState, setCardioState] = useState(cardio)

    if (!auth) return <h1 className={"center-text"}>Not authorized</h1>

    const onMakeCardioHandler = async cardioData => {
        const response = await fetch(`/api/cardio/createCardio`, {
            method: 'POST',
            body: JSON.stringify(cardioData),
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();

        // make a new array of existing state and new cardio data
        const newCardioState = cardioState.slice()
        // append id for key & add to start for sorting
        cardioData._id = data.data.insertedId
        newCardioState.unshift(cardioData)
        // set the cardio state to new array
        setCardioState(newCardioState)
    }

    const cardioHistoryItems = cardioState.map(c => <CardioHistory key={c._id} cardio={c}/>);
    return (
        <>
            {/*ToDo: Hide Cardio form is not auth*/}
            <CardioForm onMakeCardio={onMakeCardioHandler}/>
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
    const session = await getServerSession(context.req, context.res) // req: context.req
    console.log("session:", session)

    const email = "mikeobw@gmail.com"; // ToDo: update to get from JWT
    let auth = true;
    let cardio;

    // Get role from email
    const client = await mongoConnect();
    const db = client.db();
    const collection = db.collection("users");
    const userData = await collection.find({email}).toArray();

    // no user guard`
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