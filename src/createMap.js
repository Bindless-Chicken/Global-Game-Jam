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

    //var EndGame = new Sector(4000, function (){});


    var map = new Map([sectorEasy, sectorMedium, sectorEnd], game);
//
//    map.getObstaclesRed().add((new Obstacle(game, 50, 50, 'obstacle',
//        COLORS.RED)).sprite);
//    map.getObstacles().add((new Obstacle(game, 600, 600, 'obstacle',
//        COLORS.RED)).sprite);
//    map.getObstacles().add((new Obstacle(game, 800, 800, 'obstacle',
//        COLORS.RED)).sprite);

//    map.streams.add((new Stream(100,100,100,10)).create(game));
//    map.streams.add((new Stream(100,200,300,10)).create(game));

    //Define the world size
    game.world.setBounds(0, 0, 3000, 3000);

    return map;
}

function createMapProcedural(game, nbColors) {
    // Sectors
    var sectorEasy = new Sector(500+Math.random()*250, function () {
    });
    var sectorMedium = new Sector(1500+Math.random()*750, function () {
    });
    var sectorEnd = new Sector(3000+Math.random()*1500, function () {
    });


    var map = new Map([sectorEasy,sectorMedium,sectorEnd], game);
    var color, sign1, sign2;

    for (var i = 0; i < (30 + Math.random() * 10); i++) {
        switch ((Math.floor(Math.random() * 100)) % (nbColors)) {
            case 0:
                map.getObstaclesRed().add((new Obstacle(game, -
                    sectorEasy.getRadius() + Math.random() * sectorEasy.getRadius() * 2, -
                    sectorEasy.getRadius() + Math.random() * sectorEasy.getRadius() * 2,
                    'obstacle', COLORS.RED)).sprite);
                break;
            case 1:
                map.getObstaclesBlue().add((new Obstacle(game, -
                    sectorEasy.getRadius() + Math.random() * sectorEasy.getRadius() * 2, -
                    sectorEasy.getRadius() + Math.random() * sectorEasy.getRadius() * 2,
                    'obstacle', COLORS.BLUE)).sprite);
                break;
            case 2:
                map.getObstaclesGreen().add((new Obstacle(game, -
                    sectorEasy.getRadius() + Math.random() * sectorEasy.getRadius() * 2, -
                    sectorEasy.getRadius() + Math.random() * sectorEasy.getRadius() * 2,
                    'obstacle', COLORS.GREEN)).sprite);
                break;
        }
    }

    //Loop for the medium sector
    for (var i = 0; i < (50 + Math.random() * 15); i++) {
        sign1 = Math.random() < 0.5 ? -1 : 1;
        sign2 = Math.random() < 0.5 ? -1 : 1;

        switch ((Math.floor(Math.random() * 100)) % (nbColors)) {
            case 0:
                map.getObstaclesRed().add((new Obstacle(game,
                    sign1 * (sectorEasy + Math.random() * (sectorMedium - sectorEasy)),
                    sign2 * (sectorEasy + Math.random() * (sectorMedium - sectorEasy)),
                    'obstacle', COLORS.RED)).sprite);
                break;
            case 1:
                map.getObstaclesRed().add((new Obstacle(game,
                    sign1 * (sectorEasy + Math.random() * (sectorMedium - sectorEasy)),
                    sign2 * (sectorEasy + Math.random() * (sectorMedium - sectorEasy)),
                    'obstacle', COLORS.BLUE)).sprite);
                break;
            case 2:
                map.getObstaclesRed().add((new Obstacle(game,
                    sign1 * (sectorEasy + Math.random() * (sectorMedium - sectorEasy)),
                    sign2 * (sectorEasy + Math.random() * (sectorMedium - sectorEasy)),
                    'obstacle', COLORS.GREEN)).sprite);
                break;
        }
    }

    //Loop for the last sector
    for (var i = 0; i < 80 + (Math.random() * 20); i++) {
        sign1 = Math.random() < 0.5 ? -1 : 1;
        sign2 = Math.random() < 0.5 ? -1 : 1;

        switch ((Math.floor(Math.random() * 100)) % (nbColors)) {
            case 0:
                map.getObstaclesRed().add((new Obstacle(game,
                    sign1 * (sectorMedium + Math.random() * (sectorEnd - sectorMedium)),
                    sign2 * (sectorMedium + Math.random() * (sectorEnd - sectorMedium)),
                    'obstacle', COLORS.RED)).sprite);
                break;
            case 1:
                map.getObstaclesRed().add((new Obstacle(game,
                    sign1 * (sectorMedium + Math.random() * (sectorEnd - sectorMedium)),
                    sign2 * (sectorMedium + Math.random() * (sectorEnd - sectorMedium)),
                    'obstacle', COLORS.BLUE)).sprite);
                break;
            case 2:
                map.getObstaclesRed().add((new Obstacle(game,
                    sign1 * (sectorMedium + Math.random() * (sectorEnd - sectorMedium)),
                    sign2 * (sectorMedium + Math.random() * (sectorEnd - sectorMedium)),
                    'obstacle', COLORS.GREEN)).sprite);
                break;
        }
    }

    //Add streams (only for sector 2-3)
    for (var i = 0; i < (5 + Math.random() * 2); i++) {
        sign1 = Math.random() < 0.5 ? -1 : 1;
        sign2 = Math.random() < 0.5 ? -1 : 1;
        map.getStreams().add((new Stream(Math.random() * 75 + 50,
            sign1 * (sectorMedium + Math.random() * (sectorEnd - sectorEasy)),
            sign2 * (sectorMedium + Math.random() * (sectorEnd - sectorEasy)),
            Math.random() * 15 + 5)).create(game));
    }

    //Add monsters (only for sector 3)
    for (var i = 0; i < (1 + Math.random() * 1); i++) {
        map.getMonsters().add(createDefaultCharger(game,
            sign1 * (sectorMedium + Math.random() * (sectorEnd - sectorMedium)),
            sign2 * (sectorMedium + Math.random() * (sectorEnd - sectorMedium))
        ).sprite);
        switch ((Math.floor(Math.random() * 100)) % (nbColors - 1)) {
            case 0:
                map.getMonsters().add(createDefaultSpammer(game,
                    sign1 * (sectorMedium + Math.random() * (sectorEnd - sectorMedium)),
                    sign2 * (sectorMedium + Math.random() * (sectorEnd - sectorMedium)
                        ), COLORS.RED).sprite);
                break;
            case 1:
                map.getMonsters().add(createDefaultSpammer(game,
                    sign1 * (sectorMedium + Math.random() * (sectorEnd - sectorMedium)),
                    sign2 * (sectorMedium + Math.random() * (sectorEnd - sectorMedium)
                        ), COLORS.BLUE).sprite);

                break;
            case 2:
                map.getMonsters().add(createDefaultSpammer(game,
                    sign1 * (sectorMedium + Math.random() * (sectorEnd - sectorMedium)),
                    sign2 * (sectorMedium + Math.random() * (sectorEnd - sectorMedium)
                        ), COLORS.GREEN).sprite);
                break;
        }
    }

    console.debug(map);

    //Set a specific color for the endGame zone


    //Define the world size

    // todo To check
    game.world.setBounds(-sectorEnd.getRadius() / 2, -sectorEnd.getRadius() / 2, sectorEnd.getRadius(), sectorEnd.getRadius());

    return map;
}

