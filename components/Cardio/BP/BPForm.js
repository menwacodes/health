/*
    1. Add skeleton and create reusable components
    2. Apply Refs
    3. Create onSubmitHandler
        1. Console log the stuff
        2. When working, create API to consume, use fetch to call API
 */

import Button from "../../ui/Button/Button.js";
import Input from "../../ui/Input/Input.js";
import TextArea from "../../ui/TextArea/TextArea.js";
import classes from "./BPForm.module.scss";

function BPForm() {
    return (
        <form className={classes.form}>

            <Input input={{
                type: "datetime-local", name: "date", id: "date",
                placeholder: "Date", required: true
            }} label="Date"/>

            <select className={classes.select} name="timeOfDay" id="timeOfDay">
                <option value="" disabled selected>Time of Day</option>
                <option value="morning">Morning</option>
                <option value="evening">Afternoon</option>
            </select>

            <TextArea textAreaDef={{name: "notes", id: "notes", cols: 50, rows: 5, placeholder: "Notes"}} />

            <section>
                <h3>Reading 1</h3>
                <div>
                    <Input input={{type: "number", min: 100, max: 300, placeholder: "Systolic", name: "systolic1", id: "systolic1"}} />
                    <Input input={{type: "number", min: 60, max: 140, placeholder: "Diastolic", name: "diastolic1", id: "diastolic1"}} />
                    <Input input={{type: "number", min: 50, max: 250, placeholder: "Pulse", name: "pulse1", id: "pulse1"}} />
                </div>
            </section>

            <section>
                <h3>Reading 2</h3>
                <div>
                    <Input input={{type: "number", min: 100, max: 300, placeholder: "Systolic", name: "systolic2", id: "systolic2"}} />
                    <Input input={{type: "number", min: 60, max: 140, placeholder: "Diastolic", name: "diastolic2", id: "diastolic2"}} />
                    <Input input={{type: "number", min: 100, max: 250, placeholder: "Pulse", name: "pulse2", id: "pulse2"}} />
                </div>
            </section>

            <Button type={"submit"}>Save</Button>
        </form>
    );
}

export default BPForm;