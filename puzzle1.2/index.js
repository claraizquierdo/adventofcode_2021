import { MEASUREMENTS } from './data.js'

const calculateIncreasingMeasurements = (measurements) => {
    let increasing = 0;
    let firstThreeMeasurements = 0;
    let secondThreeMeasurements = 0;

    measurements.forEach((element, index) => {
        
        if (index < (measurements.length - 2)) {
            firstThreeMeasurements = element + measurements[index + 1] + measurements[index + 2];
            secondThreeMeasurements = measurements[index + 1] + measurements[index + 2] + measurements[index + 3];
            increasing = increasing + (firstThreeMeasurements < secondThreeMeasurements ? 1 : 0);
        }
    });

    document.getElementById('increasing-measurements').innerHTML = increasing;
}

calculateIncreasingMeasurements(MEASUREMENTS);