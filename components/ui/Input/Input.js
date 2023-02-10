import classes from './Input.module.css';

const Input = ({input, label}) => {
    console.log(input)
    return (
        <div className={classes.input__group}>
            <label className={classes.input__group__label} htmlFor={input.id}>{label}</label>
            <input className={classes.input__group__input} {...input}/>
        </div>
    );
};

export default Input;