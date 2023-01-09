import CardioForm from "../../../components/Cardio/CardioForm.js";
import CardioHistory from "../../../components/Cardio/CardioHistory.js";
import {getCardio} from '../../api/cardio.js';
import classes from './Cardio.module.scss'

function CardioPage({cardio}) {
    const cardioHistoryItems = cardio.map(c => <CardioHistory key={c._id} cardio={c}/>)
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
    const cardioData = await getCardio();
    const cardio = JSON.parse(JSON.stringify(cardioData));
    // const cardio = cardioData
    return {props: {cardio}};
}

export default CardioPage;