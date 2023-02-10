import classes from "./TextArea.module.scss"

export default function TextArea({textAreaDef, labelText}) {
    return (
        <div>
            <label htmlFor="">{labelText}</label>
            <textarea className={classes.textarea} {...textAreaDef}></textarea>
        </div>
    )
}