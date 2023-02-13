/*
    1. Add skeleton and create reusable components
    2. Apply Refs
    3. Create onSubmitHandler
        1. Console log the stuff
        2. When working, create API to consume, use fetch to call API
 */

import {useRef} from "react";
import Button from "../ui/Button/Button.js";
import Input from "../ui/Input/Input.js";
import TextArea from "../ui/TextArea/TextArea.js";
import classes from "./BPForm.module.scss";

function BPForm() {
    const dateRef = useRef();
    const mornAftRef = useRef();
    const notesRef = useRef();
    const sys1Ref = useRef();
    const dia1Ref = useRef();
    const pulse1Ref = useRef();
    const sys2Ref = useRef();
    const dia2Ref = useRef();
    const pulse2Ref = useRef();

    const submitHandler = event => {
        event.preventDefault();

        console.log("date ref: ", dateRef.current.value);
        console.log("morn/aft ref: ", mornAftRef.current.value);
        console.log("notes ref: ", notesRef.current.value);
        console.log("systolic 1 ref: ", sys1Ref.current.value);
        console.log("diastolic 1 ref: ", dia1Ref.current.value);
        console.log("pulse 1 ref: ", pulse1Ref.current.value);
        console.log("systolic 2 ref: ", sys2Ref.current.value);
        console.log("diastolic 2 ref: ", dia2Ref.current.value);
        console.log("pulse 2 ref: ", pulse2Ref.current.value);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.form__top}>
                <div className={classes.form__date_time}>
                    <Input
                        input={{
                            type: "datetime-local", name: "date", id: "date",
                            placeholder: "Date", required: true
                        }}
                        ref={dateRef}/>

                    <select className={classes.select} name="timeOfDay" id="timeOfDay" defaultValue={"init"}
                            ref={mornAftRef}>
                        <option value="init" disabled>Time of Day</option>
                        <option value="morning">Morning</option>
                        <option value="evening">Evening</option>
                    </select>
                </div>

                <TextArea
                    textAreaDef={{name: "notes", id: "notes", cols: 50, rows: 5, placeholder: "Notes"}}
                    ref={notesRef}
                />
            </div>
            <div className={classes.form__readings}>
                <section className={"mr-lg"}>
                    <h3 className={classes.center_text}>Reading 1</h3>
                    <div className={classes.form__reading}>
                        <Input
                            input={{
                                type: "number",
                                min: 100,
                                max: 300,
                                placeholder: "Systolic",
                                name: "systolic1",
                                id: "systolic1"
                            }}
                            inputClasses={classes.input}
                            ref={sys1Ref}
                        />
                        <Input
                            input={{
                                type: "number",
                                min: 60,
                                max: 140,
                                placeholder: "Diastolic",
                                name: "diastolic1",
                                id: "diastolic1"
                            }}
                            inputClasses={classes.input}
                            ref={dia1Ref}
                        />
                        <Input
                            input={{
                                type: "number",
                                min: 50,
                                max: 250,
                                placeholder: "Pulse",
                                name: "pulse1",
                                id: "pulse1"
                            }}
                            inputClasses={classes.input}
                            ref={pulse1Ref}
                        />
                    </div>
                </section>

                <section>
                    <h3 className={classes.center_text}>Reading 2</h3>
                    <div className={classes.form__reading}>
                        <Input
                            input={{
                                type: "number",
                                min: 100,
                                max: 300,
                                placeholder: "Systolic",
                                name: "systolic2",
                                id: "systolic2"
                            }}
                            inputClasses={classes.input}
                            ref={sys2Ref}
                        />
                        <Input
                            input={{
                                type: "number",
                                min: 60,
                                max: 140,
                                placeholder: "Diastolic",
                                name: "diastolic2",
                                id: "diastolic2"
                            }}
                            inputClasses={classes.input}
                            ref={dia2Ref}
                        />
                        <Input
                            input={{
                                type: "number",
                                min: 100,
                                max: 250,
                                placeholder: "Pulse",
                                name: "pulse2",
                                id: "pulse2"
                            }}
                            inputClasses={classes.input}
                            ref={pulse2Ref}
                        />
                    </div>
                </section>
            </div>

            <Button type={"submit"}>Save</Button>
        </form>
    );
}

export default BPForm;