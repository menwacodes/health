import classes from "./MedsCard.module.scss";

function MedsCard({meds}) {

    const formatDate = date => {
        return Intl.DateTimeFormat('en-CA', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }).format(new Date(date))
    }

    return (
        <article className={classes.card}>
            <header className={classes.card__header}>{meds.drug} - {meds.dosageMg}mg</header>
            <section className={classes.card__med_items}>
                <div className={classes.card__med_item}>
                    <span>Treats</span> <span>{meds.treats}</span>
                </div>
                <div className={classes.card__med_item}>
                    <span>Started</span>
                    <span>{formatDate(meds.started)}</span>
                </div>
                <div className={classes.card__med_item}>
                    <span>Admin</span>
                    <span>{meds.administration}</span>
                </div>
                {
                    meds.stopped &&
                    <div className={classes.card__med_item}>
                        <span>Stopped</span>
                        <span>{formatDate(meds.stopped.date)}</span>
                    </div>
                }
                {
                    meds.stopped &&
                    <div className={classes.card__med_item}>
                        <span>Reason</span>
                        <span style={{textAlign: "right"}}>{meds.stopped.reason}</span>
                    </div>}
            </section>
        </article>
    );
}

export default MedsCard;