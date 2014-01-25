/**
 * Created by Thomas on 1/25/14.
 */


function createMap(game){
    // Sectors
    var sectorEasy = new Sector(500, function () {
    });
    var sectorMedium = new Sector(1500, function () {
    });
    var sectorEnd = new Sector(3000, function () {
    });


    var map = new Map([sectorEasy,sectorMedium,sectorEnd], game);


    map.getObstacles().create(new Obstacle(game, 500, 500, "w_red", COLORS.RED));
    map.getObstacles().create(new Obstacle(game, 800, 800, "w_red", COLORS.RED));
    map.getObstacles().create(new Obstacle(game, -500, -500, "w_red", COLORS.RED));
//    map.getObstacles().create(new Phaser.Rectangle(250,250, 100, 100));
//    map.getObstacles().create(new Phaser.Rectangle(30,3,20,20), 0);
//    map.getObstacles().create(new Phaser.Rectangle(60,300,20,20), 1);
//    map.getObstacles().create(new Phaser.Rectangle(130,43,20,20), 2);
//    map.getObstacles().create(new Phaser.Rectangle(160,320,20,20), 3);
//    map.getObstacles().create(new Phaser.Rectangle(230,536,20,20), 4);
//    map.getObstacles().create(new Phaser.Rectangle(260,300,20,20), 5);

    console.log(map);


    //Define the world size

    game.world.setBounds(0, 0, 3000, 3000);


    return map;
}

var COLORS = {
    RED: {name: "red", value: "#FF0000", power: {velocity: 10, period: 1}},
    BLUE: {name: "blue", value: "#0000FF", power: {velocity: 10, period: 1}},
    GREEN: {name: "green", value: "00FF00", power: {velocity: 10, period: 2}},
    YELLOW: {name: "yellow", value: "FFFF00", power: {velocity: 20, period: 0.5}},
    PURPLE: {name: "purple", value: "663399", power: {velocity: 5, period: 3}}
};