/**
 * Created by Thomas on 1/25/14.
 */


function createMap(){
    // Sectors
    var sectorEasy = new Sector(50, function(){});
    var sectorMedium = new Sector(150, function(){});
    var sectorEnd = new Sector(300, function(){});

    var obstacle1 = new Obstacle(new Phaser.Rectangle(30,3,20,20), 1);
    var obstacle2 = new Obstacle(new Phaser.Rectangle(60,300,20,20), 1);


    var map = new Map([sectorEasy,sectorMedium,sectorEnd], [obstacle1, obstacle2]);

    return map;
}