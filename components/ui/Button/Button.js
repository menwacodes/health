import styles from './Button.module.scss';

const Button = props => {
    return (
        <button
            className={`${styles.button} ${props.inboundClasses}`}
            type={props.type || "button"}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;

