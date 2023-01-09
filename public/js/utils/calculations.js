/**
 * # calcHR
 * - Based on https://www.cdc.gov/physicalactivity/basics/measuring/heartrate.htm
 *
 */
export function calcHR() {
        const age = +document.querySelector('#age').value
        const maxHR = 220 - age
        document.querySelector("#mod-hr-min").innerText = Math.ceil(maxHR * .64)
        document.querySelector("#mod-hr-max").innerText = Math.ceil(maxHR * .76)
        document.querySelector("#vig-hr-min").innerText = Math.ceil(maxHR * .77)
        document.querySelector("#vig-hr-max").innerText = Math.ceil(maxHR * .93)
    }