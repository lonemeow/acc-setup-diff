const data = {
    amr_v8_vantage_gt3: {
        name: 'AMR V8 Vantage GT3',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * 0.18 + 10.7,
        toeMins: [-0.4, -0.4],
        wheelRates: [
            [115, 125, 135, 145, 155, 165, 175, 185],
            [105, 115, 125, 135, 145, 155, 165, 175, 185, 195]
        ],
        steeringRatioMin: 14,
        brakeBiasMin: 57,
        rideHeightMinFront: 53,
        rideHeightMinRear: 53
    },
    ferrari_488_gt3: {
        name: 'Ferrari 488 GT3',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * (20.6 - 5.0) / 98 + 5.0,
        toeMins: [-0.4, -0.4],
        wheelRates: [
            [94, 101, 107, 113, 120, 126, 138.6, 151, 163.8, 176, 189],
            [106, 113, 120, 127, 134, 141, 155, 169.5, 183.6, 198, 212]
        ],
        steeringRatioMin: 10,
        brakeBiasMin: 47,
        rideHeightMinFront: 55,
        rideHeightMinRear: 55
    },
    ferrari_488_challenge_evo: {
        name: 'Ferrari 488 Challenge Evo',
        tirePressureMin: 17,
        casterFunc: (v) => v * (20.6 - 5.0) / 98 + 5.0,
        toeMins: [-0.4, -0.4],
        wheelRates: [
            [151, 163.8],
            [141, 155]
        ],
        steeringRatioMin: 10,
        brakeBiasMin: 51,
        rideHeightMinFront: 59,
        rideHeightMinRear: 103
    },
    bmw_m2_cs_racing: {
        name: 'BMW M2 CS Racing',
        tirePressureMin: 17,
        casterFunc: (v) => 8.5,
        toeMins: [-0.2, 0],
        wheelRates: [
            [162, 180, 198],
            [103, 117, 131]
        ],
        steeringRatioMin: 10,
        brakeBiasMin: 56,
        rideHeightMinFront: 125,
        rideHeightMinRear: 125
    },
    mclaren_720s_gt3: {
        name: 'McLaren 720S GT3',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * (8 - 5.3) / 11 + 5.3,
        toeMins: [-0.48, -0.1],
        wheelRates: [
            [118, 134, 150, 166, 182, 198, 214, 230],
            [114, 128, 142, 156, 170, 184, 198, 212]
        ],
        steeringRatioMin: 11,
        brakeBiasMin: 47,
        rideHeightMinFront: 50,
        rideHeightMinRear: 64
    },
    audi_r8_lms_evo_ii: {
        name: 'Audi R8 LMS evo II',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * (16.8 - 8.8) / 34 + 8.8,
        toeMins: [-0.4, -0.4],
        wheelRates: [
            [112, 132, 153, 174, 185, 195],
            [124, 144, 163, 173, 183, 202]
        ],
        steeringRatioMin: 12,
        brakeBiasMin: 50,
        rideHeightMinFront: 54,
        rideHeightMinRear: 54
    },
    chevrolet_camaro_gt4r: {
        name: 'Chevrolet Camaro GT4.R',
        tirePressureMin: 17,
        casterFunc: (v) => 7.1,
        toeMins: [-0.2, 0.0],
        wheelRates: [
            [165.888, 184.32, 202.752],
            [90, 102, 114]
        ],
        steeringRatioMin: 10,
        brakeBiasMin: 47,
        rideHeightMinFront: 115,
        rideHeightMinRear: 123
    }
}

export default data;