import Button from "../ui/Button/Button.js";
import classes from './CardioForm.module.scss'

function CardioForm() {
    return (
        <section className={classes.cardio__header__form_section}>
            <h2 className={`${classes.cardio__header__heading} mb-sm`}>New Cardio</h2>
            <form className={classes.cardio__header__form} action="#" method="post">
                <div className="cardio--header__form--group">
                    <label htmlFor="date">Date</label>
                    <input
                        className={classes.cardio__header__form__input} type="datetime-local" name="date" id="date"
                        placeholder="Date" required=""/>
                </div>
                <div className="cardio--header__form--group">
                    <label className={classes.cardio__header__form__label}
                           htmlFor="exerciseTime">Exercise
                        Time</label>
                    <input
                        className={classes.cardio__header__form__input} type="number" name="exerciseTime" id="exerciseTime"
                        placeholder="Exercise Time" required=""/>
                </div>
                <div className="cardio--header__form--group">
                    <label className={classes.cardio__header__form__label}
                           htmlFor="avgBPM">Average BPM</label><input
                    className={classes.cardio__header__form__input} type="number" name="avgBPM" id="avgBPM"
                    placeholder="Average BPM" required=""/>
                </div>
                <div className="cardio--header__form--group">
                    <label className={classes.cardio__header__form__label}
                           htmlFor="minHR">Min HR</label>
                    <input
                        className={classes.cardio__header__form__input} type="number" name="minHR" id="minHR"
                        placeholder="Min HR"
                        required=""/>
                </div>
                <div className="cardio--header__form--group">
                    <label className={classes.cardio__header__form__label}
                           htmlFor="maxHR">Max HR</label>
                    <input
                        className={classes.cardio__header__form__input} type="number" name="maxHR" id="maxHR"
                        placeholder="Max HR"
                        required=""/>
                </div>
                <div className="cardio--header__form--group mb-md">
                    <label className={classes.cardio__header__form__label}
                           htmlFor="equipment">Equipment</label>
                    <input
                        className={classes.cardio__header__form__input} type="text" name="equipment" id="equipment"
                        placeholder="Equipment" required=""/>
                </div>
                <div className={classes.cardio__header__form__group_btn}>
                    <Button>Save</Button>
                </div>
            </form>
        </section>
    );
}

export default CardioForm;