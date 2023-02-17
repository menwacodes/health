import classes from "./Logo.module.scss";

function Logo() {
    return (
        <div className={classes.logo}>

            <span className={classes.logo__text}>Health</span>
        </div>
    );
}

export default Logo;