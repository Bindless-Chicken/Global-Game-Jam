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

    //create obstacles
    map.getObstacles().add(new Obstacle(game, 500, 500, 'h_blue', COLORS.RED).sprite);
    map.getObstacles().add(new Obstacle(game, 800, 800, 'h_blue', COLORS.RED).sprite);
    map.getObstacles().add(new Obstacle(game, -500, -500, 'h_blue', COLORS.RED).sprite);

    //Create streams
    map.getStreams().push(new Stream(game, 45, 10, 100, 150, 10, 250));


    //Define the world size
    game.world.setBounds(-2000, -2000, 3000, 3000);

    return map;
}

var COLORS = {
    RED: {name: "red", value: "#FF0000", power: {velocity: 10, period: 1}},
    BLUE: {name: "blue", value: "#0000FF", power: {velocity: 10, period: 1}},
    GREEN: {name: "green", value: "00FF00", power: {velocity: 10, period: 2}},
    YELLOW: {name: "yellow", value: "FFFF00", power: {velocity: 20, period: 0.5}},
    PURPLE: {name: "purple", value: "663399", power: {velocity: 5, period: 3}}
};