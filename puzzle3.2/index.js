import { REPORT } from "./data.js";

let oxygenGeneratorRating = '';
let co2ScrubberRating = '';

const calculateGammaRateAtPosition = (values, index) => {
  let numberOfZeros = 0;
  let numberOfOnes = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i].charAt(index) === '0') {
      numberOfZeros++;
    } else {
      numberOfOnes++;
    }
  }

  return numberOfZeros > numberOfOnes ? '0' : '1';
} 

const filterByOxygenCriteria = (values, index) => {
  let rate = calculateGammaRateAtPosition(values, index);

  if (index >= values[0].length) return null;

  let filterdValues = values.filter(value => value.charAt(index) === rate);
  if (filterdValues.length === 1) {
    return filterdValues[0];
  } else {
    return filterByOxygenCriteria(filterdValues, index + 1);
  }
}

const filterByCo2Criteria = (values, index) => {
  let rate = calculateGammaRateAtPosition(values, index) === '0' ? '1' : '0';

  if (index >= values[0].length) return null;

  let filterdValues = values.filter(value => value.charAt(index) === rate);
  if (filterdValues.length === 1) {
    return filterdValues[0];
  } else {
    return filterByCo2Criteria(filterdValues, index + 1);
  }
}

oxygenGeneratorRating = filterByOxygenCriteria(REPORT, 0);
co2ScrubberRating = filterByCo2Criteria(REPORT, 0);

document.getElementById("oxygenrate").innerText = `${oxygenGeneratorRating} (${parseInt(oxygenGeneratorRating, 2)})`;
document.getElementById("co2rate").innerText = `${co2ScrubberRating} (${parseInt(co2ScrubberRating, 2)})`;
document.getElementById("solution").innerText = parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScrubberRating, 2);
