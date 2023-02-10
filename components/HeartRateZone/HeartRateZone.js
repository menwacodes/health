import {calcHR} from "../../public/js/utils/calculations.js";
import {capitalize} from "../../public/js/utils/formatting.js";
import Input from "../ui/Input/Input.js";
import classes from './HeartRateZone.module.scss';

// import

function HeartRateZone() {
    const labelText = "age";

    return (
        <section className={classes.hrz_container}>
            <h1 className={classes.hrz__title}>Heart Rate Zone</h1>
            <p className={`${classes.hrz__text} mb-lg`}>Target: 150 minutes of 130bpm per week, spread out however makes
                sense, more is better, timer starts at 130bpm
            </p>
            <div className={classes.hrz__input_container}>
                <section className={`${classes.hrz__input_user} mb-sm`}>
                    <Input
                        label={capitalize(labelText)}
                        input={{
                            id: labelText,
                            type: "number",
                            inputMode: "numeric",
                            min: 10,
                            max: 99,
                            defaultValue: 52,
                            onBlur: calcHR
                        }}
                    />
                </section>
                <section className={classes.hr_zones}>
                    <div/>
                    <div className={classes.hr_zones__header}>Min</div>
                    <div className={classes.hr_zones__header}>Max</div>
                    <div className={classes.hr_zones__header}>Moderate</div>
                    <div id={"mod-hr-min"} className={classes.hr_zones__entry}>125</div>
                    <div id={"mod-hr-max"} className={classes.hr_zones__entry}>149</div>
                    <div className={classes.hr_zones__header}>High</div>
                    <div id={"vig-hr-min"} className={classes.hr_zones__entry}>151</div>
                    <div id={"vig-hr-max"} className={classes.hr_zones__entry}>182</div>
                </section>
            </div>
        </section>
    );
}

export default HeartRateZone;