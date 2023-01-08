// import packages
// import files with relative reference

function PyramidList({type}) {
    // type is 'volume' or 'weight'
    // in this component, type drives the title of the columns

    // need Pyramid Items that take in the type to do the calculation that has a multiplying list for each
    // Items should have very similar css to WeightList
    // To align, the flex for these items match the flex for the spans below, start with flex: 0 1 2 rem for the items, longer for the exercise
    return (
        <section>
            <header>
                <span>Exercise</span>
                <span>30/30</span>
                <span>15/20</span>
                <span>10/15</span>
                <span>5/10</span>
            </header>
            <div>

            </div>
        </section>
    );
}

export default PyramidList;