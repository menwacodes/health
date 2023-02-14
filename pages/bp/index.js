// import packages
// import files with relative reference

import {useState} from "react";
import BPForm from "../../components/BP/BPForm.js";
import BPHistory from "../../components/BP/BPHistory.js";
import mongoConnect from "../../lib/mongo-connect.js";

function BloodPressurePage({bp, auth}) {


    const [bpState, setBpState] = useState(bp);

    if (!auth) return <h1 className={"center-text"}>Not Authorized</h1>

    /*
        Takes BP from form and
          1. Creates database entry
          2. Updates state with the data
     */
    const onMakeBpHandler = async bpData => {

        const response = await fetch(`/api/bp/createBP`, {
            method: 'POST',
            body: JSON.stringify(bpData),
            headers: {'Content-Type': 'application/json'}
        });
        const data = await response.json();

        // put bp into state
        const newBpState = bpState.slice();
        bpData._id = data.data.insertedId;
        newBpState.unshift(bpData)
        setBpState(newBpState)
    }

    // const bpHistoryItems = bpState.map(b)

    return (
        <article>
            <BPForm onMakeBp={onMakeBpHandler}/>
            <BPHistory bp={bpState} />
        </article>
    );
}

/*
    For security, work on /pages/cardio/index first
 */
export async function getServerSideProps() {
    const email = "mikeobw@gmail.com";
    let auth = true;
    let bp;

    const client = await mongoConnect();
    const db = client.db();
    const collection = db.collection("users");
    const userData = await collection.find({email}).toArray();

    if (userData.length === 0) auth = false;

    if (auth && userData.at(0).role === "admin") {
        const bpCollection = db.collection("bp");
        const bpData = await bpCollection.find({}).sort({date: -1}).toArray();
        bp = JSON.parse(JSON.stringify(bpData));
    } else {
        console.log("No dice");
        auth = false;
        bp = [];
    }

    return {props: {bp, auth}}

}

export default BloodPressurePage;