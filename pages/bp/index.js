import {useState} from "react";
import BPForm from "../../components/BP/BPForm.js";
import BPHistory from "../../components/BP/BPHistory.js";
import BPHistoryGrid from "../../components/BP/BPHistoryGrid.js";
import Button from "../../components/ui/Button/Button.js";
import mongoConnect from "../../lib/mongo-connect.js";
import classes from "./BloodPressure.module.scss"

function BloodPressurePage({bp, auth}) {

    const [showGrid, setShowGrid] = useState(true)

    const [bpState, setBpState] = useState(bp);

    if (!auth) return <h1 className={"center-text"}>Not Authorized</h1>

    const showGridHandler = () => setShowGrid(showGrid => !showGrid)

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

    // const bpHistoryItems = bpState.map(b)  two-side-by-side bp-history mb-md mt-md

    return (
        <article>
            <BPForm onMakeBp={onMakeBpHandler}/>
            <div className={`${classes.two_side_by_side} ${classes.bp_history}`}>
                <h2 className={"center-text"}>History</h2>
                <Button onClick={showGridHandler}>{showGrid ? "Show Cards" : "Show Table"}</Button>
            </div>

            {showGrid && <BPHistoryGrid bp={bpState}/>}
            {!showGrid && <BPHistory bp={bpState}/>}
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