/**
 * Created by Thomas on 1/25/14.
 */

// Initialization functions
loadFiles();

window.onload = function () {
    setTimeout(function () {
        mainPhaser();
        creditsDown();
    }, 3000);

};

// JS file preloader
function loadFiles() {
    var head = document.getElementsByTagName("head")[0];
    for (var i = 0; i < files.length; i++) {
        var js = document.createElement("script");
        js.type = "text/javascript";
        js.src = "src/" + files[i];
        head.appendChild(js);
    }
}


function mainPhaser() {
    var game = new Phaser.Game($(window).width(), $(window).height(), Phaser.CANVAS, 'gameCanvas', { preload: preload, create: create, update: update, render: render });
    var maxColor = 4;

    game.focus = false;
    game.createSprite = function (x, y, key) {
        return this.add.sprite(x, y, String(key));
    };
    $(window).focus(function () {
        game.focus = true;
    }).blur(function () {
            game.focus = false;
        });

    setInterval(function () {
        // console.log(game.focus);
    }, 1000);

    game.changeZone = changeZone;
    game.soundRadar = function () {radarSound.play();}

    var map;
    var camera;
    var player1, player2, inputsKeyboard, inputsMouse, inputsPointer;
    var charger = new Array();


    function gofull() {
        game.stage.scale.startFullScreen();
    }

    function preload() {
        game.load.image('h_red', 'img/h_red.png');

        game.load.image('w_red', 'img/wave_red.png');
        game.load.image('w_blue', 'img/wave_blue.png');
        game.load.image('w_green', 'img/wave_green.png');
        game.load.image('w_yellow', 'img/wave_yellow.png');
        game.load.image('w_purple', 'img/wave_purple.png');

        game.load.image('obstacle', 'img/obstacle.png');
        game.load.spritesheet('greenline', 'img/greenline.png', 10, 64, 40);
        game.load.image('meteor', 'img/meteor.png');

        game.load.image('stream', 'img/stream.png');
        game.load.image('charger','img/charger.png');
        game.load.image('charger_dead','img/charger_dead.png');

        game.load.audio('main1','sound/main1.m4a');
        game.load.audio('main2','sound/main2.m4a');
        game.load.audio('main3','sound/main3.m4a');
        game.load.audio('mainFinal','sound/mainFinal.m4a');

        game.load.audio('level1','sound/level1.m4a');
        game.load.audio('level2','sound/level2.m4a');
        game.load.audio('level3','sound/level3.m4a');
        game.load.audio('levelFinal','sound/finalLevel.m4a');

        game.load.audio('blop1','sound/blop1.m4a');
        game.load.audio('blop2','sound/blop2.m4a');
        game.load.audio('blop3','sound/blop3.m4a');
        game.load.audio('blop4','sound/blop4.m4a');
        game.load.audio('blop5','sound/blop5.m4a');

        game.load.audio('ambiance','sound/ambiance.m4a');
        game.load.audio('radar','sound/radar_t.m4a');

        //game.load.image('spammer','img/spammer.png');

        /*game.load.spritesheet('greenline', 'img/greenline.png', 100, 64, 30);
         game.load.spritesheet('meteor', 'img/meteor.png', 50, 50, 30);*/
    }

    function create() {

        main = [
            game.add.audio('main1'),
            game.add.audio('main2'),
            game.add.audio('main3'),
            game.add.audio('mainFinal')
        ];
        // main[0].play('',0,1,true);

        level = [
            game.add.audio('level1', 1, true),
            game.add.audio('level2', 1, true),
            game.add.audio('level3', 1, true),
            game.add.audio('levelFinal', 1, true)
        ];

        ambiance = game.add.audio('ambiance', 1, true);
        ambiance.play('', 0, 0.5, true);

        blop = {
            red: game.add.audio('blop1'),
            blue: game.add.audio('blop2'),
            green: game.add.audio('blop3'),
            yellow: game.add.audio('blop4'),
            purple: game.add.audio('blop5')
        };

        radarSound = game.add.audio('radar');

        // map = createMap(game);
        map = createMapProcedural(game);

        //todo Change 2 to nbPlayer when define
        map = createMapProcedural(game, maxColor);

//        console.debug(map);

        player1 = new Player(COLORS.RED, game);
        player1.setSprite(game.add.sprite(0, 0, 'w_red'));
        player1.sprite.scale = new Phaser.Point(2 * player1.life, 2 * player1.life);
        player1.sonar(game);
        player1.sprite.body.collideWorldBounds = true;
        player1.maxColor = maxColor;

        player2 = new Player(COLORS.BLUE, game);
        player2.setSprite(game.add.sprite(0, 0, 'w_blue'));
        player2.sprite.scale = new Phaser.Point(2 * player1.life, 2 * player1.life);
        player2.sonar(game);
        player2.sprite.body.collideWorldBounds = true;


        game.camera.follow(player1.sprite);


        inputsKeyboard = game.input.keyboard;
        inputsPointer = game.input.mousePointer;
        inputsMouse = game.input.mouse;
    }

    function changeZone(newZone) {
        for (var i = 0; i < 4; i++) {
            if(i == newZone){
                level[i].play();
                main[i].play('',0,1,true);
            }else{
                main[i].pause();
            }
        }
        ;

        if (newZone == 3) {
            ambiance.pause();
        } else {
            ambiance.resume();
        }
    }

    function update() {
        // if(!game.focus) return;
        player2.moveK(inputsKeyboard, game);
        player1.moveM(inputsPointer, inputsMouse, game);
        for (var i = 0; i < charger.length; i++) {
            if (charger[i].dead == false)
                charger[i].reachable(player1, game);
           if(game.physics.collide(player1.sonarPts,charger[i].sprite))
            {
                charger[i].getDmg(1);
            }

            charger[i].reachable(player2, game);
        }
        ;

        var monsters = map.getMonsters();
        for (var i = 0; i < monsters.length; i++) {
            if (monsters.getAt(i).name == "charger")
                monsters[i].reachable(player1, game);
//            monsters[i].reachable(player2, game);
        }
        ;
//        console.log("position : " + player1.sprite.body.x + " | " + player1.sprite.body.y);
        for (var i = 0; i < charger.length; i++) {
            if (charger[i].hp <= 0 && (charger[i].dead == false)) {
                charger[i].dead = true;
                charger[i].sprite.loadTexture('charger_dead');
                charger[i].sprite.body.velocity.x = 0;
                charger[i].sprite.body.velocity.y = 0;
            }
        }
        ;

        player1.updateSector(map, game);
        // player1.farAway(game, player1);

        // check for collision over the player1's sonar
        collideHandler(player1, game);
        collideHandler(player2,game);
    }


    function collideHandler(player, game) {
        if (player.type.name == 'red') {
            game.physics.collide(player.sonarPts, map.obstaclesRed, function (pt, ob) {
                player.sonarCollision(pt, game);
            });
        }

        if (player.type.name == 'blue') {
            game.physics.collide(player.sonarPts, map.obstaclesBlue, function (pt, ob) {
                player.sonarCollision(pt, game);
            });
        }

        if (player.type.name == 'green') {
            game.physics.collide(player.sonarPts, map.obstaclesGreen, function (pt, ob) {
                player.sonarCollision(pt, game);
            });
        }

        if (player.type.name == 'yellow') {
            game.physics.collide(player.sonarPts, map.obstaclesYellow, function (pt, ob) {
                player.sonarCollision(pt, game);
            });
        }

        if (player.type.name == 'purple') {
            game.physics.collide(player.sonarPts, map.obstaclesPurple, function (pt, ob) {
                player.sonarCollision(pt, game);
            });
        }

        // console.log(player.sprite,map.obstaclesRed);
        game.physics.collide(player.sprite, map.obstaclesRed, function (pl, ob) {
            player.loseLife();
            blop[player.type.name].play();

        });
        game.physics.collide(player.sprite, map.obstaclesBlue, function (pl, ob) {
            player.loseLife();
            blop[player.type.name].play();
        });
        game.physics.collide(player.sprite, map.obstaclesGreen, function (pl, ob) {
            player.loseLife();
            blop[player.type.name].play();
        });
        game.physics.collide(player.sprite, map.obstaclesYellow, function (pl, ob) {
            player.loseLife();
            blop[player.type.name].play();
        });
        game.physics.collide(player.sprite, map.obstaclesPurple, function (pl, ob) {
            player.loseLife();
            blop[player.type.name].play();
        });

        map.streams.forEach(function (stream) {
            var minDist = 100;
            var param = stream.getForce(player1.sprite, game);
            if (param.distance < minDist) {
                minDist = param.distance;
                player1.applyForce(param.force, stream.x, stream.y, game);
            }
        });
    }

    function render() {

        // map.obstacles.forEachAlive(function(ob){
        //     // console.log(ob);
        //    game.debug.renderRectangle(ob,'#022ff22');
        // },this)
        // // console.log(map.obstacles);
        // // for(var i = 0; i < map.obstacles.lenght; ++i){
        // //     console.log(i);
        // // }   

        // console.log("X : "+player.sprite.x+" | Y : "+player.sprite.y);
        //var m = map.getObstacles();

        // //         console.log("size = " + m.total);
        // //        console.debug(m);

        //             {
        // //                console.log("obs = " + i);
        // //                console.log(m.getAt(i));
        //                 game.debug.renderSpriteBody(m.getAt(i), '#022ff22');
        //             }
        //         }
    }
}
