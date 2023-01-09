import {useState} from "react";
import Button from "../../ui/Button/Button.js";
import PyramidList from "./PyramidList.js";
import classes from './WeightCard.module.scss';
import WeightsList from "./WeightsList.js";

function WeightsCard({weight}) {
    const [weightType, setWeightType] = useState('base');
    const weightItems = weight.exercises.map(weightItem => <WeightsList key={weightItem._id} weight={weightItem}/>);

    const onClickHandler = type => setWeightType(type)

    return (
        <article className={classes.card}>
            <header className={classes.card__header}>{weight.bodyPart}</header>
            {(weightType === 'base') && weightItems}

            {(weightType === 'base') && <footer className={classes.card__footer}>
                <Button onClick={()=>onClickHandler('volume')}>Pyramid Volume</Button>
                <Button onClick={()=>onClickHandler('heavy')}>Pyramid Weight</Button>
            </footer>}

            {(weightType === 'volume') && <PyramidList type={'volume'} weight={weight.exercises} />}
            {(weightType === 'volume') && <footer className={classes.card__footer}>
                <Button onClick={()=>onClickHandler('base')}>Base Weight</Button>
                <Button onClick={()=>onClickHandler('heavy')}>Pyramid Weight</Button>
            </footer>}

            {(weightType === 'heavy') && <PyramidList type={'heavy'} weight={weight.exercises} />}
            {(weightType === 'heavy') && <footer className={classes.card__footer}>
                <Button onClick={()=>onClickHandler('volume')}>Pyramid Volume</Button>
                <Button onClick={()=>onClickHandler('base')}>Base Weight</Button>
            </footer>}

        </article>
    );
}

export default WeightsCard;