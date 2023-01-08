import {useEffect, useState} from "react";
// import weightsData from '../../../data/weights.json';
import classes from './Weights.module.scss';
import WeightsCard from "./WeightsCard.js";

function Weights({weightData}) {
    const [weights, setWeights] = useState(weightData)

    // async function getProducts() {
    //
    // }

    // useEffect( () => {
    //     setWeights(weightData)
    // }, []
    // )

    const card = weights.map(weight => <WeightsCard key={weight._id} weight={weight}/>);
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