import {useEffect, useState} from "react";
import weightsData from '../../../data/weights.json';
import classes from './Weights.module.scss';
import WeightsCard from "./WeightsCard.js";

function Weights() {
    const [weights, setWeights] = useState([])

    // async function getProducts() {
    //
    // }

    useEffect( () => {
        setWeights(weightsData)
    }, []
    )

    const card = weights.map(weight => <WeightsCard key={weight._id.mongoId} weight={weight}/>);
    return (
        <>
            <h1 className={classes.weight__title}>Base Weights</h1>
            <div className={classes.weight__container}>
                <div className={classes.weight__content}>
                    {card}
                </div>
            </div>
        </>
    );
}

export default Weights;