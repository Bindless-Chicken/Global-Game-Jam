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

    map.getObstacles().add((new Obstacle(game, 500, 500, 'obstacle', COLORS.RED)).sprite);
    map.getObstacles().add((new Obstacle(game, 600, 600, 'obstacle', COLORS.RED)).sprite);
    map.getObstacles().add((new Obstacle(game, 800, 800, 'obstacle', COLORS.RED)).sprite);

    map.streams.add((new Stream(100,100,100,10)).create(game));
    map.streams.add((new Stream(100,200,300,10)).create(game));

    //Define the world size

    game.world.setBounds(0, 0, 3000, 3000);

    return map;
}

function createMapProcedural(game){
    // Sectors
    var sectorEasy = new Sector(500+Math.random()*250, function () {
    });
    var sectorMedium = new Sector(1500+Math.random()*750, function () {
    });
    var sectorEnd = new Sector(3000+Math.random()*1500, function () {
    });


    var map = new Map([sectorEasy,sectorMedium,sectorEnd], game);
    var color;

    for(var i = 0; i< 30 + Math.random()*10 ; i++){
        switch ((Math.floor(Math.random()*100))%2){
            case 0:
                map.getObstaclesRed().add((new Obstacle(game, -sectorEasy.getRadius()+Math.random()*sectorEasy.getRadius()*2,  -sectorEasy.getRadius()+Math.random()*sectorEasy.getRadius()*2, 'obstacle', COLORS.RED)).sprite);
                break;
            case 1:
                map.getObstaclesBlue().add((new Obstacle(game, -sectorEasy.getRadius()+Math.random()*sectorEasy.getRadius()*2,  -sectorEasy.getRadius()+Math.random()*sectorEasy.getRadius()*2, 'obstacle', COLORS.BLUE)).sprite);
                break;
            case 2:
                map.getObstaclesGreen().add((new Obstacle(game, -sectorEasy.getRadius()+Math.random()*sectorEasy.getRadius()*2,  -sectorEasy.getRadius()+Math.random()*sectorEasy.getRadius()*2, 'obstacle', COLORS.GREEN)).sprite);
                break;
        }
    }
    map.streams.add((new Stream(100,100,100,10)).create(game));
    map.streams.add((new Stream(100,200,300,10)).create(game));

    //Define the world size

    game.world.setBounds(-2000, -2000, 3000, 3000);

    return map;
}

