
import {useState} from "react";
import MedsCard from "../../components/Meds/MedsCard.js";
import Button from "../../components/ui/Button/Button.js";
import mongoConnect from "../../lib/mongo-connect.js";
import classes from "./Meds.module.scss"

function MedsPage({meds, auth}) {

    // create a button and click handler to sort the meds from state and set new state
    const [medsData, setMedsData] = useState(meds);
    const [showStopped, setShowStopped] = useState(false);

    let medsCards;

    if (showStopped) {
        medsCards = medsData.map(m => <MedsCard key={m._id} meds={m}/>);
    } else {
        medsCards = medsData.map(m => {
            if (!m.stopped) {
                return <MedsCard key={m._id} meds={m}/>;
            }
        });
    }

    if (!auth) return <h1 className={"center-text"}>Not Authorized</h1>;

    const showStoppedClickHandler = () => setShowStopped(pv => !pv)

    return (
        <article className={"center-on-page"}>
            {medsCards}
            <Button inboundClasses={classes.btn} onClick={showStoppedClickHandler}>{showStopped ? "Hide Stopped" : "Show Stopped"}</Button>
        </article>
    );
}

export async function getStaticProps() {

    const email = "mikeobw@gmail.com";
    let auth = true;
    let med;

    const client = await mongoConnect();
    const db = client.db();
    const collection = await db.collection("users");
    const userData = await collection.find({email}).toArray();

    if (userData.length === 0) auth = false;

    if (auth && userData.at(0).role === "admin") {
        const medCollection = db.collection("meds");
        const medData = await medCollection.find({}).sort({drug: 1}).toArray();
        med = JSON.parse(JSON.stringify(medData));
    } else {
        console.log("No dice");
        auth = false;
        med = [];
    }

    // console.log(auth)
    return {props: {meds: med, auth}, revalidate: 60 * 60 * 24};
}

export default MedsPage;