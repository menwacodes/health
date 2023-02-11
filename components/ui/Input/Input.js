import classes from './Input.module.css';

const Input = ({input, label, styles, inputClasses}) => {
    console.log(styles)
    return (
        <div className={classes.input__group}>
            <label className={classes.input__group__label} htmlFor={input.id}>{label}</label>
            <input className={`${classes.input__group__input} ${inputClasses}`} {...input} style={styles}/>
        </div>
    );
};

export default Input;