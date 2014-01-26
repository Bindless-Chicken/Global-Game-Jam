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

function creditsDown(game, player){
    player.lock = true;
    console.log(player);
    var length = ($(window).height()+$("#credits").height())+1000;
    console.log(length);
    $("#credits").animate({
        top: "+="+length
    }, 25000, function() {
        // Animation complete.
    });

    var length = ($(window).height()/2)+800;
    console.log(length);
    $("#thx").animate({
        top: "+="+length
    }, 25000, function() {
        // Animation complete.
    });

    //console.log(player);
    //console.log(game);

    //setTimeout(changeColor(game, player),1000);
}

function createMapProcedural(game, nbColors) {
    // Sectors
    var sectorEasy = new Sector(500 + Math.random() * 250, function (player) {
        if (player.currentZone != 1) {
            player.currentZone = 1;
            game.changeZone(0,player);
            console.log("Zone 1");

        }
    });
    var sectorMedium = new Sector(sectorEasy.getRadius() + 500 + Math.random() * 250, function (player) {
        if (player.currentZone != 2) {
            player.currentZone = 2;
            game.changeZone(1,player);
            console.log("Zone 2");
        }
    });
    var sectorHard = new Sector(sectorMedium.getRadius() + 500 + Math.random() * 250, function (player) {
        if (player.currentZone != 3) {
            player.currentZone = 3;
            game.changeZone(2,player);
            console.log("Zone 3");
        }
    });
    var sectorEnd = new Sector(sectorHard.getRadius() + 500 + Math.random() * 250, function (player) {
        if (player.currentZone != 4) {
            player.currentZone = 4;
            game.changeZone(3,player);
            console.log("Zone 4");
            console.log(player);
            setTimeout(creditsDown(game, player),1000);
        }
    });


    var map = new Map([sectorEasy, sectorMedium, sectorHard, sectorEnd], game);
    var color, sign1, sign2, angle, dist1, dist2;
    var secEasySize = sectorEasy.getRadius();
    var secMedSize = sectorMedium.getRadius();
    var secHardSize = sectorHard.getRadius();
    var secEndSize = sectorEnd.getRadius();
    // console.log(secEasySize);
    // console.log(secMedSize);
    // console.log(secHardSize);
    // console.log(secEndSize);


    for (var i = 0; i < (20 + Math.random() * 17); i++) {
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
            case 3:
                map.getObstaclesYellow().add((new Obstacle(game, -
                    secEasySize + Math.random() * secEasySize * 2, -
                    secEasySize + Math.random() * secEasySize * 2,
                    'obstacle', COLORS.YELLOW)).sprite);
                break;
            case 4:
                map.getObstaclesPurple().add((new Obstacle(game, -
                    secEasySize + Math.random() * secEasySize * 2, -
                    secEasySize + Math.random() * secEasySize * 2,
                    'obstacle', COLORS.PURPLE)).sprite);
                break;
        }
    }

    //Loop for the medium sector
    for (var i = 0; i < (125 + Math.random() * 50); i++) {
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
            case 3:
                map.getObstaclesYellow().add((new Obstacle(game, -
                    Math.cos(angle) * dist1,
                    Math.sin(angle) * dist2,
                    'obstacle', COLORS.YELLOW)).sprite);
                break;
            case 4:
                map.getObstaclesPurple().add((new Obstacle(game, -
                    Math.cos(angle) * dist1,
                    Math.sin(angle) * dist2,
                    'obstacle', COLORS.PURPLE)).sprite);
                break;
        }
    }

    //Loop for the last sector
    for (var i = 0; i < 300 + (Math.random() * 70); i++) {
        sign1 = Math.random() < 0.5 ? -1 : 1;
        sign2 = Math.random() < 0.5 ? -1 : 1;

        angle = Math.random() * 360;
        dist1 = sign1 * (secMedSize + Math.random() * (secHardSize - secMedSize));
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
            case 3:
                map.getObstaclesYellow().add((new Obstacle(game, -
                    Math.cos(angle) * dist1,
                    Math.sin(angle) * dist2,
                    'obstacle', COLORS.YELLOW)).sprite);
                break;
            case 4:
                map.getObstaclesPurple().add((new Obstacle(game, -
                    Math.cos(angle) * dist1,
                    Math.sin(angle) * dist2,
                    'obstacle', COLORS.PURPLE)).sprite);
                break;
        }
    }

    //Add monsters (only for sector 3)

    //Add charger
    /*for (var i = 0; i < (5 + Math.random() * 8); i++) {

        sign1 = Math.random() < 0.5 ? -1 : 1;
        sign2 = Math.random() < 0.5 ? -1 : 1;

        angle = Math.random() * 360;
        dist1 = sign1 * (secMedSize + Math.random() * (secHardSize - secMedSize));
        dist2 = dist1 * sign2;
        map.getMonsters().add(createDefaultCharger(game,
            Math.cos(angle) * dist1,
            Math.sin(angle) * dist2).sprite);
    }*/

    //Add Spammer
    for (var i = 0; i < (3 + Math.random() * 5); i++) {

        sign1 = Math.random() < 0.5 ? -1 : 1;
        sign2 = Math.random() < 0.5 ? -1 : 1;

        angle = Math.random() * 360;
        dist1 = sign1 * (secMedSize + Math.random() * (secHardSize - secMedSize));
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

    //Add streams (only for sector 2-3)
    for (var i = 0; i < (10 + Math.random() * 10); i++) {
        sign1 = Math.random() < 0.5 ? -1 : 1;
        sign2 = Math.random() < 0.5 ? -1 : 1;

        angle = Math.random() * 360;
        dist1 = sign1 * (secMedSize + Math.random() * (secHardSize - secEasySize));
        dist2 = dist1 * sign2;

        map.getStreams().add((new Stream(Math.random() * 75 + 50,
            Math.cos(angle) * dist1,
            Math.sin(angle) * dist2,
            Math.random() * 15 + 5)).create(game));
    }

    game.world.setBounds(-secEndSize, -secEndSize, secEndSize * 2, secEndSize * 2);

    return map;
}

