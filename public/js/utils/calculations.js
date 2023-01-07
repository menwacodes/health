/**
 * # calcHR
 * - Based on https://www.cdc.gov/physicalactivity/basics/measuring/heartrate.htm
 *
 */
const calcHR = () => {
        const age = +document.querySelector('#age').value
        console.log(age, 220 - age, Math.ceil((220-age)*.77))
        const maxHR = 220 - age
        console.log(maxHR)
        document.querySelector("#mod-hr-min").innerText = Math.ceil(maxHR * .64)
        document.querySelector("#mod-hr-max").innerText = Math.ceil(maxHR * .76)
        document.querySelector("#vig-hr-min").innerText = Math.ceil(maxHR * .77)
        document.querySelector("#vig-hr-max").innerText = Math.ceil(maxHR * .93)
    }