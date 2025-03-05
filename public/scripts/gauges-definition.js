function createTemperatureGauge() {
    var gauge = new LinearGauge({
        renderTo: 'gauge-temperature',
        width: 120,
        height: 400,
        units: "Temperature C",
        minValue: 0,
        startAngle: 90,
        ticksAngle: 180,
        maxValue: 40,
        colorValueBoxRect: "#049faa",
        colorValueBoxRectEnd: "#049faa",
        colorValueBoxBackground: "#f1fbfc",
        valueDec: 2,
        valueInt: 2,
        majorTicks: [
            "0",
            "5",
            "10",
            "15",
            "20",
            "25",
            "30",
            "35",
            "40",
            "45",
            "50"
        ],
        minorTicks: 4,
        strokeTicks: true,
        highlights: [
            {
                "from": 30,
                "to": 40,
                "color": "rgba(200, 50, 50, .75)"
            }
        ],
        colorPlate: "#fff",
        colorBarProgress: "#CC2936",
        colorBarProgressEnd: "#049faa",
        borderShadowWidth: 0,
        borders: false,
        needleType: "arrow",
        needleWidth: 2,
        needleCircleSize: 7,
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 1500,
        animationRule: "linear",
        barWidth: 10,
    });
    return gauge;
}

// Create Humidity Gauge
function createHumidityGauge(){
    var gauge = new RadialGauge({
        renderTo: 'gauge-humidity',
        width: 250,
        height: 200,
        units: "Humidity (%)",
        minValue: 0,
        maxValue: 100,
        colorValueBoxRect: "#049faa",
        colorValueBoxRectEnd: "#049faa",
        colorValueBoxBackground: "#f1fbfc",
        valueInt: 2,
        majorTicks: [
            "0",
            "20",
            "40",
            "60",
            "80",
            "100"
    
        ],
        minorTicks: 4,
        strokeTicks: true,
        highlights: [
            {
                "from": 80,
                "to": 100,
                "color": "#03C0C1"
            }
        ],
        colorPlate: "#fff",
        borderShadowWidth: 0,
        borders: false,
        needleType: "line",
        colorNeedle: "#007F80",
        colorNeedleEnd: "#007F80",
        needleWidth: 2,
        needleCircleSize: 3,
        colorNeedleCircleOuter: "#007F80",
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 1500,
        animationRule: "linear"
    });
    return gauge;
}

function createWaterGauge() {
    var gauge = new LinearGauge({
        renderTo: 'gauge-water',
        width: 120,
        height: 400,
        units: "Temperature C",
        minValue: 0,
        startAngle: 90,
        ticksAngle: 180,
        maxValue: 40,
        colorValueBoxRect: "#049faa",
        colorValueBoxRectEnd: "#049faa",
        colorValueBoxBackground: "#f1fbfc",
        valueDec: 2,
        valueInt: 2,
        majorTicks: [
            "0",
            "5",
            "10",
            "15",
            "20",
            "25",
            "30",
            "35",
            "40"
        ],
        minorTicks: 4,
        strokeTicks: true,
        highlights: [
            {
                "from": 30,
                "to": 40,
                "color": "rgba(200, 50, 50, .75)"
            }
        ],
        colorPlate: "#fff",
        colorBarProgress: "#CC2936",
        colorBarProgressEnd: "#049faa",
        borderShadowWidth: 0,
        borders: false,
        needleType: "arrow",
        needleWidth: 2,
        needleCircleSize: 7,
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 1500,
        animationRule: "linear",
        barWidth: 10,
    });
    return gauge;
}

function createVolumeGauge() {
    var gauge = new LinearGauge({
        renderTo: 'gauge-volume',
    width: 120,
    height: 400,
    units: " Litros ",
    minValue: 0,
    maxValue: 250,
    colorValueBoxRect: "#049faa",
    colorValueBoxRectEnd: "#049faa",
    colorValueBoxBackground: "#f1fbfc",
    majorTicks: [
        "0",
        "50",
        "100",
        "150",
        "200",
        "250"
    ],
    minorTicks: 4,
    strokeTicks: true,
    highlights: [
        {
            "from": 0,
            "to": 100,
            "color": "rgba(237, 12, 12, .75)"
        },
        {
            "from": 101,
            "to": 150,
            "color": "rgba(249, 249, 9, .75)"
        },
        {
            "from": 151,
            "to": 250,
            "color": "rgba(40, 255, 44, .75)"
        }
    ],
    colorPlate: "#fff",
    borderShadowWidth: 0,
    borders: false,
    needleType: "arrow",
    needleWidth: 2,
    animationDuration: 1500,
    animationRule: "linear",
    tickSide: "left",
    numberSide: "left",
    needleSide: "left",
    barStrokeWidth: 7,
    barBeginCircle: false,
    value: 75

 });
    return gauge;
}


function createPhGauge() {
    var gauge = new LinearGauge({
        renderTo: 'gauge-ph',
        width: 400,
        height: 150,
        minValue: 0,
        maxValue: 14,
        majorTicks: [
            0,
            2,
            4,
            6,
            8,
            10,
            12,
            14
        ],
        minorTicks: 1,
        strokeTicks: true,
        ticksWidth: 15,
        ticksWidthMinor: 7.5,
        highlights: [
            {
                "from": 0,
                "to": 4,
                "color": "rgba(204, 0, 0, 1)"
            },
            {
                "from": 4,
                "to": 10,
                "color": "rgba(40, 255, 44, .8)"
            },
            {
                "from": 10,
                "to": 14,
                "color": "rgba(166, 3, 155, 1)"
            }
        ],
        colorMajorTicks: "#100202",
        colorMinorTicks: "#100202",
        colorNumbers: "#100202",
        //colorPlate: "#2465c0",
        //colorPlateEnd: "#327ac0",
        borderShadowWidth: 0,
        borders: false,
        borderRadius: 10,
        needleType: "arrow",
        needleWidth: 3,
        animationDuration: 1500,
        animationRule: "linear",
        colorNeedle: "#222",
        colorNeedleEnd: "",
        colorBarProgress: "#f4cccc",
        colorBar: "#f5f5f5",
        barStroke: 0,
        barWidth: 8,
        barBeginCircle: false


    });
    return gauge;
}