import { REPORT } from "./data.js";

let gammaRate = '';
let epsilonRate = '';

const invertBinary = (binaryString) => {
  return binaryString.replace(/[0-1]/g, (v) => (v == 1 ? 0 : 1));
}

for (let i = 0; i < REPORT[0].length; i++) {
  let numberOfZeros = 0;
  let numberOfOnes = 1;
  for (let j = 0; j < REPORT.length; j++) {
    if (REPORT[j].charAt(i) === '0') {
      numberOfZeros++;
    } else {
      numberOfOnes++;
    }
  }
  gammaRate = gammaRate + (numberOfZeros > numberOfOnes ? '0' : '1');
}

epsilonRate = invertBinary(gammaRate);


document.getElementById("gammarate").innerText = `${gammaRate} (${parseInt(gammaRate, 2)})`;
document.getElementById("epsilonrate").innerText = `${epsilonRate} (${parseInt(epsilonRate, 2)})`;
document.getElementById("solution").innerText = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
