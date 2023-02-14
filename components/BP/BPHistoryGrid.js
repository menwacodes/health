import classes from "./BPHistoryGrid.module.scss";

const BPHistoryGrid = ({bp}) => {

    const bpItems = bp.map(bp => {
        const formattedDate = Intl.DateTimeFormat('en-CA', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        }).format(new Date(bp.date));

        const amPm = bp.timeOfDay === 'morning' ? 'AM' : 'PM';

        return (
            <div key={bp._id} className={classes.grid}>

                <span>
                    {formattedDate} ({amPm})
                    {bp.notes && <p>{bp.notes}</p>}
                </span>
                <span>{bp.systolic1}</span>
                <span>{bp.diastolic1}</span>
                <span>{bp.pulse1}</span>
                <span>{bp.systolic2}</span>
                <span>{bp.diastolic2}</span>
                <span>{bp.pulse2}</span>
            </div>
        );
    });

    return (
        <>
            <div className={classes.grid}>
                <span className={`${classes.grid__reading1} ${classes.grid__title}`}>Reading 1</span>
                <span className={`${classes.grid__reading2} ${classes.grid__title}`}>Reading 2</span>

                <span className={`${classes.grid__sys1} ${classes.grid__title}`}>Sys</span>
                <span className={classes.grid__title}>Dia</span>
                <span className={classes.grid__title}>Pulse</span>
                <span className={classes.grid__title}>Sys</span>
                <span className={classes.grid__title}>Dia</span>
                <span className={classes.grid__title}>Pulse</span>

                {/*{bpItems}*/}

                {/*<span>*/}
                {/*    2023-02-14 (AM)*/}
                {/*</span>*/}
                {/*<span>120</span>*/}
                {/*<span>80</span>*/}
                {/*<span>75</span>*/}
                {/*<span>120</span>*/}
                {/*<span>80</span>*/}
                {/*<span>75</span>*/}

                {/*<span>*/}
                {/*    2023-02-13 (PM)*/}
                {/*    <p>I am note</p>*/}
                {/*</span>*/}
                {/*<span>120</span>*/}
                {/*<span>80</span>*/}
                {/*<span>75</span>*/}
                {/*<span>120</span>*/}
                {/*<span>80</span>*/}
                {/*<span>75</span>*/}

            </div>
            {bpItems}
        </>
    );
};

export default BPHistoryGrid;