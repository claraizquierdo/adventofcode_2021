import input from "./input.js";
// import input from "./inputSmall"; //The result should be 150, in this case.

/**
 * Global counters for incrementing and decrementing depth and horizontal position 😋
 */
let currentHorizontalPosition = 0;
let currentDepthPosition = 0;
let currenAim = 0;

/**
 * This function converts:
 * "forward 1" -> 1
 * "down 2" -> 2
 * "up 2" -> 2
 * @param {String} anInput
 * @returns {Number}
 */
function extractValue(anInput) {
  // This regular expression matches a number from a given string
  const [value] = anInput.match(/\d/g);

  return Number(value);
}

/**
 * From a given input string, it will increment or
 * decrement our global counters
 * @param {String} anInput
 */
function extractDirection(anInput) {
  if (anInput.includes("forward")) {
    currentDepthPosition = currentDepthPosition + currenAim*extractValue(anInput);
    return (currentHorizontalPosition =
      currentHorizontalPosition + extractValue(anInput));
  }

  if (anInput.includes("down")) {
    return (currenAim = currenAim + extractValue(anInput));
  }

  if (anInput.includes("up")) {
    
    return (currenAim = currenAim - extractValue(anInput));
  }

  // If the given input does not contain forward/down/up prints an error
  return console.error("Invalid input!");
}

const chart = document.getElementById("chart").getContext("2d");

chart.beginPath();

chart.strokeStyle = "magenta";
chart.lineWidth = 2;
chart.width = "1200";
chart.height = "800";

for (let i = 0; i < input.length; i++) {
  const currentInput = input[i];
  chart.moveTo(currentHorizontalPosition, currentDepthPosition);

  extractDirection(currentInput);

  chart.lineTo(currentHorizontalPosition, currentDepthPosition);
  chart.stroke();
}

console.log({ currentDepthPosition, currentHorizontalPosition });

document.getElementById("app").innerText =
  currentDepthPosition * currentHorizontalPosition;
