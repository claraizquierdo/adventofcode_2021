const MEASUREMENTS = [199 ,200 ,208 ,210 ,200 ,207 ,240 ,269 ,260 ,263];

const calculateIncreasingMeasurements = (measurements) => {
    let increasing = 0;
    
    measurements.forEach((element, index) => {
        if (index !== 0) {
            increasing = increasing + (element > measurements[index - 1] ? 1 : 0);
        }
    });

    document.getElementById('increasing-measurements').innerHTML = increasing;
}

calculateIncreasingMeasurements(MEASUREMENTS);