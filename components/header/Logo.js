import classes from "./Logo.module.scss";

function Logo() {
    return (
        <div className={classes.logo}>
            <svg>
                <use href={"/img/sprite.svg#icon-heartbeat"}></use>
            </svg>
            <span className={classes.logo__text}>Health</span>
        </div>
    );
}

export default Logo;