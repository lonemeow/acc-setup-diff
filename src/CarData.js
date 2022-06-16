const data = {
    // GT3
    amr_v12_vantage_gt3: {
        name: 'AMR V12 Vantage GT3',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * 0.22 + 8.3,
        toeMins: [-0.4, -0.4],
        wheelRates: [
            [115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185],
            [95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195]
        ],
        steeringRatioMin: 14,
        brakeBiasMin: 57,
        rideHeightMinFront: 55,
        rideHeightMinRear: 55
    },
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
    audi_r8_lms: {
        name: 'Audi R8 LMS',
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
    audi_r8_lms_evo: {
        name: 'Audi R8 LMS evo',
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
    bentley_continental_gt3_2016: {
        name: 'Bentley Continental GT3 2016',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * 0.24 + 8.3,
        toeMins: [-0.4, -0.4],
        wheelRates: [
            [115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185],
            [95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195]
        ],
        steeringRatioMin: 10,
        brakeBiasMin: 57,
        rideHeightMinFront: 54,
        rideHeightMinRear: 54
    },
    bentley_continental_gt3_2018: {
        name: 'Bentley Continental GT3 2018',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * 0.24 + 8.3,
        toeMins: [-0.4, -0.4],
        wheelRates: [
            [115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185],
            [95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195]
        ],
        steeringRatioMin: 10,
        brakeBiasMin: 57,
        rideHeightMinFront: 54,
        rideHeightMinRear: 54
    },
    bmw_m4_gt3: {
        name: 'BMW M4 GT3',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * 0.195 + 6.1,
        toeMins: [-0.2, 0],
        wheelRates: [
            [105, 120, 135, 150, 165, 180],
            [90, 105, 120, 135, 150, 165]
        ],
        steeringRatioMin: 10,
        brakeBiasMin: 48.5,
        rideHeightMinFront: 50,
        rideHeightMinRear: 50
    },
    bmw_m6_gt3: {
        name: 'BMW M6 GT3',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * 0.2075 + 6.7,
        toeMins: [-0.2, 0],
        wheelRates: [
            [136, 146, 156, 166, 176, 186],
            [96, 106, 116, 126, 136, 146]
        ],
        steeringRatioMin: 10,
        brakeBiasMin: 47.5,
        rideHeightMinFront: 52,
        rideHeightMinRear: 52
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
    ferrari_488_gt3_evo: {
        name: 'Ferrari 488 GT3 Evo',
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
    honda_nsx_gt3: {
        name: 'Honda NSX GT3',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * (15.2 - 8.8) + 8.8,
        toeMins: [-0.4, -0.4],
        wheelRates: [
            [115, 124, 133, 142, 151, 160, 169, 178, 187, 196],
            [115, 124, 133, 142, 151, 160, 169, 178, 187, 196, 205]
        ],
        steeringRatioMin: 10,
        brakeBiasMin: 50,
        rideHeightMinFront: 54,
        rideHeightMinRear: 54
    },
    honda_nsx_gt3_evo: {
        name: 'Honda NSX GT3 Evo',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * 0.19 + 7.2,
        toeMins: [-0.4, -0.4],
        wheelRates: [
            [73, 79.08, 85.16, 91.24, 97.32, 103.4, 109.48, 115.56, 121.64, 127.72, 133.8, 139.88, 145.96, 152.04, 158.12, 164.2, 170.28],
            [126.8, 134.7, 142.6, 150.5, 158.4, 166.3, 174.2, 182.1, 190, 197.9, 205.8, 213.7, 221.6, 229.5, 237.4, 245.3, 253.2]
        ],
        steeringRatioMin: 10,
        brakeBiasMin: 44,
        rideHeightMinFront: 54,
        rideHeightMinRear: 54
    },
    jaguar_g3: {
        name: 'Emil Frey Jaguar G3',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * 0.1825 + 4,
        toeMins: [-0.4, -0.4],
        wheelRates: [
            [100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185],
            [120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195]
        ],
        steeringRatioMin: 10,
        brakeBiasMin: 57,
        rideHeightMinFront: 60,
        rideHeightMinRear: 60
    },
    lamborghini_huracan_gt3: {
        name: 'Lamborghini Huracán GT3',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * (15 - 6.2) / 34 + 6.2,
        toeMins: [-0.4, -0.4],
        wheelRates: [
            [121, 144, 167, 190, 201, 212],
            [117, 136, 154, 164, 173, 191]
        ],
        steeringRatioMin: 10,
        brakeBiasMin: 50,
        rideHeightMinFront: 54,
        rideHeightMinRear: 54
    },
    lamborghini_huracan_gt3_evo: {
        name: 'Lamborghini Huracán GT3 Evo',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * (15 - 6.2) / 34 + 6.2,
        toeMins: [-0.4, -0.4],
        wheelRates: [
            [121, 144, 167, 190, 201, 212],
            [117, 136, 154, 164, 173, 191]
        ],
        steeringRatioMin: 10,
        brakeBiasMin: 50,
        rideHeightMinFront: 54,
        rideHeightMinRear: 54
    },
    lexus_rc_f_gt3: {
        name: 'Lexus RC F GT3',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * 0.19 + 7.9,
        toeMins: [-0.4, -0.4],
        wheelRates: [
            [96, 115, 134, 154, 173, 192],
            [87, 112, 136, 154, 175, 210]
        ],
        steeringRatioMin: 11,
        brakeBiasMin: 50,
        rideHeightMinFront: 50,
        rideHeightMinRear: 64
    },
    mclaren_650s_gt3: {
        name: 'McLaren 650S GT3',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * 0.24 + 5.3,
        toeMins: [-0.4, -0.4],
        wheelRates: [
            [126, 136, 146, 156, 166, 176],
            [126, 136, 146, 156, 166, 176]
        ],
        steeringRatioMin: 11,
        brakeBiasMin: 47,
        rideHeightMinFront: 56,
        rideHeightMinRear: 56
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
    mercedes_amg_gt3: {
        name: 'Mercedes-AMG GT3',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * (14.1 - 6) + 6,
        toeMins: [-0.4, -0.4],
        wheelRates: [
            [130, 143, 155, 171, 187, 202],
            [71, 83, 95, 107, 119, 131]
        ],
        steeringRatioMin: 11,
        brakeBiasMin: 50,
        rideHeightMinFront: 42,
        rideHeightMinRear: 67
    },
    mercedes_amg_gt3_evo: {
        name: 'Mercedes-AMG GT3 2020',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * (14.1 - 6) + 6,
        toeMins: [-0.4, -0.4],
        wheelRates: [
            [130, 143, 155, 171, 187, 202],
            [71, 83, 95, 107, 119, 131]
        ],
        steeringRatioMin: 11,
        brakeBiasMin: 50,
        rideHeightMinFront: 42,
        rideHeightMinRear: 67
    },
    nissan_gt_r_gt3_2017: {
        name: 'Nissan GT-R Nismo GT3 2017',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * 0.205 + 6,
        toeMins: [-0.2, 0],
        wheelRates: [
            [122, 132, 142, 152, 162, 172, 182],
            [94, 104, 114, 124, 134, 144, 154]
        ],
        steeringRatioMin: 12,
        brakeBiasMin: 47.5,
        rideHeightMinFront: 55,
        rideHeightMinRear: 55
    },
    nissan_gt_r_gt3_2018: {
        name: 'Nissan GT-R Nismo GT3 2018',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * 0.18 + 12.5,
        toeMins: [-0.2, 0],
        wheelRates: [
            [136, 146, 156, 166, 176, 186],
            [96, 106, 116, 126, 136, 146]
        ],
        steeringRatioMin: 12,
        brakeBiasMin: 47.5,
        rideHeightMinFront: 55,
        rideHeightMinRear: 55
    },
    porsche_911_gt3_r: {
        name: 'Porsche 911 GT3 R',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * 0.1 + 7.3,
        toeMins: [-0.4, -0.4],
        wheelRates: [
            [83, 100, 116, 133, 149, 166],
            [155, 128, 141, 154, 167, 180]
        ],
        steeringRatioMin: 11,
        brakeBiasMin: 43,
        rideHeightMinFront: 60,
        rideHeightMinRear: 60
    },
    porsche_911ii_gt3_r: {
        name: 'Porsche 911II GT3 R',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * 0.2 + 4.4,
        toeMins: [-0.4, -0.4],
        wheelRates: [
            [100.5, 110, 114, 119, 127, 137, 141.5, 146, 155, 173.5],
            [137, 149.5, 156, 162, 174.5, 187, 193, 199.5, 212, 237]
        ],
        steeringRatioMin: 11,
        brakeBiasMin: 43,
        rideHeightMinFront: 53,
        rideHeightMinRear: 55
    },
    lamborghini_gallardo_rex: {
        name: 'Reiter Engineering R-EX GT3',
        tirePressureMin: 20.3,
        casterFunc: (v) => v * (12 - 4.9) + 4.9,
        toeMins: [-0.4, -0.4],
        wheelRates: [
            [121, 126, 131, 136, 141, 146, 151, 156, 161, 166, 171, 176, 181, 186, 191, 196, 201, 206, 211],
            [117, 122, 127, 132, 137, 142, 147, 152, 157, 162, 167, 182, 187]
        ],
        steeringRatioMin: 10,
        brakeBiasMin: 50,
        rideHeightMinFront: 54,
        rideHeightMinRear: 54
    },


    // GT4
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
    },


    // Cup
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


    // TCX
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
    }
}

export default data;