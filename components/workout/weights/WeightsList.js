import classes from './WeightsList.module.scss';

function WeightsList({weight}) {
    return (
        <section className={classes.card__item}>
            <div className={classes.card__item__description}>{weight.name}</div>
            <div className={classes.card__item__weight}>{weight.baseWeight}</div>
        </section>
    );
}

export default WeightsList;