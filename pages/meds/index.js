import {isAdmin} from "@/database/services/isAdmin";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {getServerSession} from "next-auth";
import {useState} from "react";
import MedsCard from "../../components/Meds/MedsCard.js";
import Button from "../../components/ui/Button/Button.js";
import mongoConnect from "../../lib/mongo-connect.js";
import classes from "./Meds.module.scss";

function MedsPage({ meds, auth }) {

    // create a button and click handler to sort the meds from state and set new state
    const [medsData, setMedsData] = useState(meds);
    const [showStopped, setShowStopped] = useState(false);

    if (!auth) return <h1 className={ "center-text" }>Not Authorized</h1>;

    let medsCards;

    if (showStopped) {
        medsCards = medsData.map(m => <MedsCard key={ m._id } meds={ m }/>);
    } else {
        medsCards = medsData.map(m => {
            if (!m.stopped) {
                return <MedsCard key={ m._id } meds={ m }/>;
            }
        });
    }


    const showStoppedClickHandler = () => setShowStopped(pv => !pv);

    return (
        <article className={ "center-on-page" }>
            { medsCards }
            <Button inboundClasses={ classes.btn }
                    onClick={ showStoppedClickHandler }>{ showStopped ? "Hide Stopped" : "Show Stopped" }</Button>
        </article>
    );
}

export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions);

    // check admin
    if (!session) return { props: { auth: false } };

    const email = session.user.email;
    const auth = await isAdmin(email);
    if (!auth) return { props: { auth: false } };

    // if here, user is auth, get data

    const client = await mongoConnect();
    const db = client.db();
    const medCollection = db.collection("meds");
    const medData = await medCollection.find({}).sort({ drug: 1 }).toArray();
    const med = JSON.parse(JSON.stringify(medData));


    // console.log(auth)
    return { props: { meds: med, auth }};
}

export default MedsPage;