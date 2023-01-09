// import packages
// import files with relative reference


import Link from "next/link.js";
import HeartRateZone from "../../components/HeartRateZone/HeartRateZone.js";
import classes from "./Workouts.module.scss";
import Card from "../../components/ui/Card/Card.js";

function WorkoutsPage() {
    const cardioHeader = (
        <div className={classes.header}>
            <h1>Cardio</h1>
            <svg className={`standard-icon ${classes.header__icon}`}>
                <use href={"/img/sprite.svg#icon-directions_bike"}></use>
            </svg>
        </div>
    );
    const workoutHeader = (
        <div className={classes.header}>
            <h1>Weights</h1>
            <svg className={`standard-icon ${classes.header__icon}`}>
                <use href={"/img/sprite.svg#icon-weights"}></use>
            </svg>
        </div>
    );
    return (
        <>
            <Link href={"/workouts/cardio"}>
                <Card headerContent={cardioHeader}>
                    <p>Some cardio stuff</p>
                </Card>
            </Link>
            <Link href={"/workouts/weights"}>
                <Card headerContent={workoutHeader}>
                    <p>Some workout stuff</p>
                </Card>
            </Link>
            <HeartRateZone />
        </>
    );
}

export default WorkoutsPage;