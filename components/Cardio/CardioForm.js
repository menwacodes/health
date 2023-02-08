import {useRef} from "react";
import Button from "../ui/Button/Button.js";
import classes from './CardioForm.module.scss';

function CardioForm({onMakeCardio}) {

    // inputs
    const dateInputRef = useRef();
    const timeInputRef = useRef();
    const avgBpmInputRef = useRef();
    const minHrInputRef = useRef();
    const maxHrInputRef = useRef();
    const equipmentInputRef = useRef();
    const notesInputRef = useRef();

    const onSubmitHandler = async event => {
        event.preventDefault();

        const cardioData = {
            date: dateInputRef.current.value,
            exerciseTime: +timeInputRef.current.value,
            avgBPM: +avgBpmInputRef.current.value,
            minHR: +minHrInputRef.current.value,
            maxHR: +maxHrInputRef.current.value,
            equipment: equipmentInputRef.current.value,
            notes: notesInputRef.current.value
        }

        onMakeCardio(cardioData)
    };

    return (
        <section className={classes.cardio__header__form_section}>
            <h2 className={`${classes.cardio__header__heading} mb-sm`}>New Cardio</h2>
            <form className={classes.cardio__header__form} onSubmit={onSubmitHandler}>
                <div className="cardio--header__form--group">
                    <label htmlFor="date">Date</label>
                    <input
                        className={classes.cardio__header__form__input} type="datetime-local" name="date" id="date"
                        placeholder="Date" required="" ref={dateInputRef}/>
                </div>
                <div className="cardio--header__form--group">
                    <label className={classes.cardio__header__form__label}
                           htmlFor="exerciseTime">Exercise
                        Time</label>
                    <input
                        className={classes.cardio__header__form__input} type="number" name="exerciseTime"
                        id="exerciseTime"
                        placeholder="Exercise Time" required="" ref={timeInputRef}/>
                </div>
                <div className="cardio--header__form--group">
                    <label className={classes.cardio__header__form__label}
                           htmlFor="avgBPM">Average BPM</label>
                    <input
                        className={classes.cardio__header__form__input} type="number" name="avgBPM" id="avgBPM"
                        placeholder="Average BPM" required="" ref={avgBpmInputRef}/>
                </div>
                <div className="cardio--header__form--group">
                    <label className={classes.cardio__header__form__label}
                           htmlFor="minHR">Min HR</label>
                    <input
                        className={classes.cardio__header__form__input} type="number" name="minHR" id="minHR"
                        placeholder="Min HR"
                        required="" ref={minHrInputRef}/>
                </div>
                <div className="cardio--header__form--group">
                    <label className={classes.cardio__header__form__label}
                           htmlFor="maxHR">Max HR</label>
                    <input
                        className={classes.cardio__header__form__input} type="number" name="maxHR" id="maxHR"
                        placeholder="Max HR"
                        required="" ref={maxHrInputRef}/>
                </div>
                <div className="cardio--header__form--group">
                    <label className={classes.cardio__header__form__label}
                           htmlFor="equipment">Equipment</label>
                    <input
                        className={classes.cardio__header__form__input} type="text" name="equipment" id="equipment"
                        placeholder="Equipment" required="" ref={equipmentInputRef}/>
                </div>
                <div className="cardio--header__form--group mb-md">
                    <label className={classes.cardio__header__form__label}
                           htmlFor="notes">Notes</label>
                    <textarea name="notes" id="notes" cols="5" rows="10" placeholder={"Notes"}
                              className={classes.cardio__header__form__input} ref={notesInputRef}
                    ></textarea>
                </div>
                <div className={classes.cardio__header__form__group_btn}>
                    <Button type={"submit"}>Save</Button>
                </div>
            </form>
        </section>
    );
}

export default CardioForm;