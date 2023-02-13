import {forwardRef} from "react";
import classes from './Input.module.css';

const Input = forwardRef(function Input(props, ref) {
    const {input, label, styles, inputClasses} = props;
    return (
        <div className={classes.input__group}>
            <label className={classes.input__group__label} htmlFor={input.id}>{label}</label>
            <input className={`${classes.input__group__input} ${inputClasses}`} {...input} ref={ref} style={styles}/>
        </div>
    );
});

export default Input;