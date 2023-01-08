import PyramidItems from "./PyramidItems.js";
import classes from './PyramidList.module.scss'

/**
 * # PyramidList
 * @param type: volume or heavy
 * @param weight: The amount of weight per exercise
 *
 * - update the ternaries to if conditions or some such when adding more
 *
 * @returns {JSX.Element}
 *
 */
function PyramidList({type, weight}) {
    // type is 'volume' or 'heavy', update
    // in this component, type drives the title of the columns

    // need Pyramid Items that take in the type to do the calculation that has a multiplying list for each
    // Items should have very similar css to WeightList
    // To align, the flex for these items match the flex for the spans below, start with flex: 0 1 2 rem for the items, longer for the exercise
    const pyrItems = weight.map(weightItem => <PyramidItems key={weightItem._id} type={type} weight={weightItem} />)
    return (
        <>
            <header className={classes.card__item}>
                <span className={classes.card__item__description}>Exercise</span>
                <span className={classes.card__item__number}>30</span>
                <span className={classes.card__item__number}>{type === 'volume' ? '20' : '15'}</span>
                <span className={classes.card__item__number}>{type === 'volume' ? '15' : '10'}</span>
                <span className={classes.card__item__number}>{type === 'volume' ? '10' : '5'}</span>
            </header>
            <section>
                {pyrItems}
            </section>
        </>
    );
}

export default PyramidList;