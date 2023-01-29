import CardioForm from "../../../components/Cardio/CardioForm.js";
import CardioHistory from "../../../components/Cardio/CardioHistory.js";
import {getCardio} from '../../api/cardio.js';
import classes from './Cardio.module.scss';

function CardioPage({cardio}) {
    // if empty cardio, return "no cardio" message
    // if empty cardio && authorized is no, return auth message
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

export async function getServerSideProps() {
    /*
        Fail Test:
        - Get role for homer@gmail.com

        Pass Test:
        - Get role for mikeobw@gmail.com

        Differentiate Returns
        - If there is no user or the role is not admin
            - Return an empty array for cardio and isAuth as "no"
            - Adjust the component to respond to an empty cardio array
        - If the role is admin, return the cardio array
     */
    const cardioData = await getCardio();
    const cardio = JSON.parse(JSON.stringify(cardioData));
    // const cardio = cardioData
    return {props: {cardio}};
}

export default CardioPage;