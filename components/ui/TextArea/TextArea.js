import {forwardRef} from "react";
import classes from "./TextArea.module.scss"

const TextArea = forwardRef(function TextArea(props, ref) {
    const {textAreaDef, labelText} = props;
    return (
        <div>
            <label htmlFor="">{labelText}</label>
            <textarea className={classes.textarea} {...textAreaDef} ref={ref}></textarea>
        </div>
    )
})

export default TextArea;