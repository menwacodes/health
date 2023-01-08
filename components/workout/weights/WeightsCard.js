import Button from "../../ui/Button.js";
import classes from './WeightCard.module.scss';
import WeightsList from "./WeightsList.js";

function WeightsCard({weight}) {
    const weightItems = weight.exercises.map(weightItem => <WeightsList key={weightItem._id.mongoId} weight={weightItem} />)
    return (
        <article className={classes.card}>
            <header className={classes.card__header}>{weight.bodyPart}</header>
            {weightItems}
            <footer className={classes.card__footer}>
                <Button>Pyramid Volume</Button>
                <Button>Pyramid Weight</Button>
            </footer>
        </article>
    );
}

export default WeightsCard;