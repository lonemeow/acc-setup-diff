import CarData from './CarData';

const requiredKeys = [
    'name',
    'tirePressureMin',
    'casterFunc',
    'toeMins',
    'wheelRates',
    'steeringRatioMin',
    'brakeBiasMin',
    'rideHeightMinFront',
    'rideHeightMinRear'
];

describe('CarData', () => {
    it.each(
        Object.entries(CarData)
    )('should contain required values for %s', (car, data) => {
        expect(Object.keys(data)).toEqual(requiredKeys);
    });
});
