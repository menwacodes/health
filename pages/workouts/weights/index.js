// import packages
// import files with relative reference

import Weights from "../../../components/workout/weights/Weights.js";
import {getWeights} from "../../api/weights.js";

function WeightsPage({weights}) {
  return (
    <>
      <Weights weightData={weights} />
    </>
  )
}

export async function getStaticProps() {
    const weightData = await getWeights();

    const weights = JSON.parse(JSON.stringify(weightData))
    return {props: {weights}, revalidate: 10};
}

export default WeightsPage