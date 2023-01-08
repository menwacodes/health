import round from "../../../lib/numberHelpers.js";
import classes from './PyramidItems.module.scss';

function PyramidItems({type, weight}) {

    // next two constants are base weight multipliers
    // consider an array of objects in the parent that holds the label and the multiplier
    const volume = [round(.6 * weight.baseWeight, 0), round(.7 * weight.baseWeight, 0), round(.8 * weight.baseWeight, 0), round(1 * weight.baseWeight, 0)];
    const heavy = [round(.5 * weight.baseWeight, 0), round(.75 * weight.baseWeight, 0), round(1 * weight.baseWeight, 0), round(1.25 * weight.baseWeight, 0)];

    return (
        <div className={classes.item}>
            <span className={classes.item__description}>{weight.name}</span>
            <span className={classes.item__number}>{(type === 'volume' ? volume[0] : heavy[0])}</span>
            <span className={classes.item__number}>{(type === 'volume' ? volume[1] : heavy[1])}</span>
            <span className={classes.item__number}>{(type === 'volume' ? volume[2] : heavy[2])}</span>
            <span className={classes.item__number}>{(type === 'volume' ? volume[3] : heavy[3])}</span>
        </div>
    );
}

export default PyramidItems;