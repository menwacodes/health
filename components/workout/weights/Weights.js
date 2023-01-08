// import packages
// import files with relative reference

import weights from '../../../data/weights.json'; // is array,has length

function Weights() {
  console.log(weights[0]._id)
  const card = weights.map(weight => {})
  return (
    <>
        {JSON.stringify(weights)}
    </>
  )
}

export default Weights