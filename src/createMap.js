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

    map.getObstacles().create(new Phaser.Rectangle(30,3,20,20), 0);
    map.getObstacles().create(new Phaser.Rectangle(60,300,20,20), 1);
    map.getObstacles().create(new Phaser.Rectangle(130,43,20,20), 2);
    map.getObstacles().create(new Phaser.Rectangle(160,320,20,20), 3);
    map.getObstacles().create(new Phaser.Rectangle(230,536,20,20), 4);
    map.getObstacles().create(new Phaser.Rectangle(260,300,20,20), 5);

    console.log(map);


    //Define the world size

    game.world.setBounds(0, 0, 3000, 3000);


    return map;
}