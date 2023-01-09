import styles from './Card.module.css';

const Card = ({children, className, headerContent, footerContent}) => {
    const classes = `${styles.card} ${className}`;
    return (
        <div className={classes}>
            <header>{headerContent}</header>
            {children}
            {footerContent &&
            <footer>{footerContent}</footer>}
        </div>
    );
};

export default Card;

