/**
 * Created by Thomas on 1/25/14.
 */

/// NOT USED ANYMORE
//function createMap(game){
//
//
//    // Sectors
//    var sectorEasy = new Sector(500, function () {
//    });
//    var sectorMedium = new Sector(1500, function () {
//    });
//    var sectorEnd = new Sector(3000, function () {
//    });
//
//    //var EndGame = new Sector(4000, function (){});
//
//
//    var map = new Map([sectorEasy, sectorMedium, sectorEnd], game);
////
////    map.getObstaclesRed().add((new Obstacle(game, 50, 50, 'obstacle',
////        COLORS.RED)).sprite);
////    map.getObstacles().add((new Obstacle(game, 600, 600, 'obstacle',
////        COLORS.RED)).sprite);
////    map.getObstacles().add((new Obstacle(game, 800, 800, 'obstacle',
////        COLORS.RED)).sprite);
//
////    map.streams.add((new Stream(100,100,100,10)).create(game));
////    map.streams.add((new Stream(100,200,300,10)).create(game));
//
//    //Define the world size
//    game.world.setBounds(0, 0, 3000, 3000);
//
//    return map;
//}

function createMapProcedural(game, nbColors) {
    // Sectors
    var sectorEasy = new Sector(500+Math.random()*250, function (player) {
        if(player.currentZone!=1){
            player.currentZone = 1;
            game.changeZone(0);
            console.log("Zone 1");
        }
    });
    var sectorMedium = new Sector(1500+Math.random()*750, function (player) {
        if(player.currentZone!=2){
            player.currentZone = 2;
            game.changeZone(1);
            console.log("Zone 2");
        }
    });
    var sectorHard = new Sector(3000+Math.random()*1500, function (player) {
        if(player.currentZone!=3){
            player.currentZone = 3;
            game.changeZone(2);
            console.log("Zone 3");
        }
    });
    var sectorEnd = new Sector(2000, function (player) {
        if(player.currentZone != 4){
            player.currentZone = 4;
            game.changeZone(3);
            console.log("Zone 4");
        }
    });


    var map = new Map([sectorEasy,sectorMedium,sectorEnd], game);
    var color, sign1, sign2, angle, dist1, dist2;
    var secEasySize = sectorEasy.getRadius();
    var secMedSize = sectorMedium.getRadius();
    var secEndSize = sectorHard.getRadius();
//    console.log(secEasySize);
//    console.log(secMedSize);
//    console.log(secEndSize);


    for (var i = 0; i < (15 + Math.random() * 7); i++) {
        angle = Math.random() * 360;
        dist1 = secEasySize + Math.random() * secEasySize * 2;
        dist2 = sign2 * dist1;
        switch ((Math.floor(Math.random() * 100)) % (nbColors)) {
            case 0:
                map.getObstaclesRed().add((new Obstacle(game, -
                    secEasySize + Math.random() * secEasySize * 2, -
                    secEasySize + Math.random() * secEasySize * 2,
                    'obstacle', COLORS.RED)).sprite);
                break;
            case 1:
                map.getObstaclesBlue().add((new Obstacle(game, -
                    secEasySize + Math.random() * secEasySize * 2, -
                    secEasySize + Math.random() * secEasySize * 2,
                    'obstacle', COLORS.BLUE)).sprite);
                break;
            case 2:
                map.getObstaclesGreen().add((new Obstacle(game, -
                    secEasySize + Math.random() * secEasySize * 2, -
                    secEasySize + Math.random() * secEasySize * 2,
                    'obstacle', COLORS.GREEN)).sprite);
                break;
        }
    }
    map.streams.add((new Stream(100,100,100,10)).create(game));
    map.streams.add((new Stream(100,200,300,10)).create(game));

    //Loop for the medium sector
    for (var i = 0; i < (150 + Math.random() * 50); i++) {
        sign1 = Math.random() < 0.5 ? -1 : 1;
        sign2 = Math.random() < 0.5 ? -1 : 1;

        angle = Math.random() * 360;
        dist1 = sign1 * (secEasySize + Math.random() * (secMedSize - secEasySize));
        dist2 = sign2 * dist1;
        switch ((Math.floor(Math.random() * 100)) % (nbColors)) {
            case 0:
                map.getObstaclesRed().add((new Obstacle(game,
                    Math.cos(angle) * dist1,
                    Math.sin(angle) * dist2,
                    'obstacle', COLORS.RED)).sprite);
                break;
            case 1:
                map.getObstaclesRed().add((new Obstacle(game,
                    Math.cos(angle) * dist1,
                    Math.sin(angle) * dist2,
                    'obstacle', COLORS.BLUE)).sprite);
                break;
            case 2:
                map.getObstaclesRed().add((new Obstacle(game,
                    Math.cos(angle) * dist1,
                    Math.sin(angle) * dist2,
                    'obstacle', COLORS.GREEN)).sprite);
                break;
        }
    }

    //Loop for the last sector
    for (var i = 0; i < 300 + (Math.random() * 70); i++) {
        sign1 = Math.random() < 0.5 ? -1 : 1;
        sign2 = Math.random() < 0.5 ? -1 : 1;

        angle = Math.random() * 360;
        dist1 = sign1 * (secMedSize + Math.random() * (secEndSize - secMedSize));
        dist2 = sign2 * dist1;

        switch ((Math.floor(Math.random() * 100)) % (nbColors)) {
            case 0:
                map.getObstaclesRed().add((new Obstacle(game,
                    Math.cos(angle) * dist1,
                    Math.sin(angle) * dist2,
                    'obstacle', COLORS.RED)).sprite);
                break;
            case 1:
                map.getObstaclesRed().add((new Obstacle(game,
                    Math.cos(angle) * dist1,
                    Math.sin(angle) * dist2,
                    'obstacle', COLORS.BLUE)).sprite);
                break;
            case 2:
                map.getObstaclesRed().add((new Obstacle(game,
                    Math.cos(angle) * dist1,
                    Math.sin(angle) * dist2,
                    'obstacle', COLORS.GREEN)).sprite);
                break;
        }
    }

    //Add streams (only for sector 2-3)
    for (var i = 0; i < (5 + Math.random() * 2); i++) {
        sign1 = Math.random() < 0.5 ? -1 : 1;
        sign2 = Math.random() < 0.5 ? -1 : 1;

        angle = Math.random() * 360;
        dist1 = sign1 * (secMedSize + Math.random() * (secEndSize - secEasySize));
        dist2 = dist1 * sign2;

        map.getStreams().add((new Stream(Math.random() * 75 + 50,
            Math.cos(angle) * dist1,
            Math.sin(angle) * dist2,
            Math.random() * 15 + 5)).create(game));
    }
//    console.log("streams");
//    console.log(map.getStreams());

    //Add monsters (only for sector 3)
    for (var i = 0; i < (3 + Math.random() * 1); i++) {

        sign1 = Math.random() < 0.5 ? -1 : 1;
        sign2 = Math.random() < 0.5 ? -1 : 1;

        angle = Math.random() * 360;
        dist1 = sign1 * (secMedSize + Math.random() * (secEndSize - secMedSize));
        dist2 = dist1 * sign2;

        switch ((Math.floor(Math.random() * 100)) % (nbColors)) {
            case 0:
                console.log("add monsters");
                map.getMonsters().add(createDefaultSpammer(game,
                    Math.cos(angle) * dist1,
                    Math.sin(angle) * dist2,
                    COLORS.RED).sprite);
                break;
            case 1:
                map.getMonsters().add(createDefaultSpammer(game,
                    Math.cos(angle) * dist1,
                    Math.sin(angle) * dist2,
                    COLORS.BLUE).sprite);

                break;
            case 2:
                map.getMonsters().add(createDefaultSpammer(game,
                    Math.cos(angle) * dist1,
                    Math.sin(angle) * dist2,
                    COLORS.GREEN).sprite);
                break;
        }
    }
//    console.log("monsters");
//    console.debug(map);

    //Set a specific color for the endGame zone


    //Define the world size

    // todo To check
    game.world.setBounds(-secEndSize / 2, -secEndSize / 2, secEndSize * 2, secEndSize * 2);

    return map;
}

