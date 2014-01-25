/**
 * Created by Thomas on 1/25/14.
 */


function createMap(game){
    // Sectors
    var sectorEasy = new Sector(50, function(){});
    var sectorMedium = new Sector(150, function(){});
    var sectorEnd = new Sector(300, function(){});


    var map = new Map([sectorEasy,sectorMedium,sectorEnd], game);

    map.getObstacles().create(Math.random()*100,Math.random()*100,'h_red');
    map.getObstacles().create(Math.random()*100,Math.random()*100,'h_red');
    map.getObstacles().create(Math.random()*100,Math.random()*100,'h_red');
    map.getObstacles().create(Math.random()*100,Math.random()*100,'h_red');
    map.getObstacles().create(Math.random()*100,Math.random()*100,'h_red');

    console.log(map);

    return map;
}