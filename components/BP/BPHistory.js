import classes from "./BPHistory.module.scss";

function BPHistory({bp}) {

    // map through bp and make everything from h3 down, below
    const bpItems = bp.map(bp => {
        const formattedDate = Intl.DateTimeFormat('en-CA', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }).format(new Date(bp.date))
        return (
            <div key={bp._id}>
                <h3 className={`center-text ${classes.history__grid__subtitle}`}>{formattedDate} - {bp.timeOfDay}</h3>
                <p className={"center-text"}>{bp.notes}</p>
                <div className={classes.history__grid}>
                    <span></span>
                    <span
                        className={`${classes.history__grid__title} ${classes.history__grid__reading_value}`}>Sys</span>
                    <span
                        className={`${classes.history__grid__title} ${classes.history__grid__reading_value}`}>Dia</span>
                    <span
                        className={`${classes.history__grid__title} ${classes.history__grid__reading_value}`}>Pulse</span>

                    <span className={`${classes.history__grid__title} ${classes.history__grid__reading_line}`}>
                    Reading 1
                </span>
                    <span className={classes.history__grid__reading_value}>
                    {bp.systolic1}
                </span>
                    <span className={classes.history__grid__reading_value}>
                    {bp.diastolic1}
                </span>
                    <span className={classes.history__grid__reading_value}>
                    {bp.pulse1}
                </span>

                    <span
                        className={`${classes.history__grid__title} ${classes.history__grid__reading_line}`}>
                    Reading 2
                </span>
                    <span className={classes.history__grid__reading_value}>
                    {bp.systolic2}
                </span>
                    <span className={classes.history__grid__reading_value}>
                    {bp.diastolic2}
                </span>
                    <span className={classes.history__grid__reading_value}>
                    {bp.pulse2}
                </span>
                </div>

            </div>
        );
    });
    return (
        <section className={classes.history}>
            <h2 className={"center-text"}>History</h2>
            {bpItems}
        </section>
    );
}

export default BPHistory;