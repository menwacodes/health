import classes from './CardioHistory.module.scss';

function CardioHistory({cardio}) {
    return (
        <section className={classes.history}>
            <div
                className={`${classes.history__date} mb-sm`}>
                {`${Intl.DateTimeFormat('en-CA', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                }).format(new Date(cardio.date))}`}
            </div>
            <section className={classes.history__item}>
                <div>Exercise Time</div>
                <div>{cardio.exerciseTime}</div>
            </section>
            <section className={classes.history__item}>
                <div>Average BPM</div>
                <div>{cardio.avgBPM}</div>
            </section>
            <section className={classes.history__item}>
                <div>Min HR</div>
                <div>{cardio.minHR}</div>
            </section>
            <section className={classes.history__item}>
                <div>Max HR</div>
                <div>{cardio.maxHR}</div>
            </section>
            <section className={classes.history__item}>
                <div>Equipment</div>
                <div>{cardio.equipment}</div>
            </section>
            <section className={classes.history__item}>
                <div>Notes</div>
                <div>{cardio.notes}</div>
            </section>
        </section>
    );
}

export default CardioHistory;