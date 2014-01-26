/**
 * Created by Seb on 25/01/14.
 */


// var Type = new Class({
//     initialize: function (col) {
//         console.log("col : " , col);
//         if (col != undefined) {
//             this.name = col.name;
//             this.value = col.value;
//             this.power = col.power;
//         }
//         else{
//             this.name = COLORS[RED].name;
//             this.value = COLORS[RED].value;
//             this.power = COLORS[RED].power;
//         }
//         console.log(this);
//     }
// });

var COLORS = {
    RED: {name: "red", value: "#FF0000", power: {speed: 100, period: 800}},
    BLUE: {name: "blue", value: "#0000FF", power: {speed: 200, period: 800}},
    GREEN: {name: "green", value: "00FF00", power: {speed: 150, period: 800}},
    YELLOW: {name: "yellow", value: "FFFF00", power: {speed: 100, period: 800}},
    PURPLE: {name: "purple", value: "663399", power: {speed: 100, period: 800}}
};
