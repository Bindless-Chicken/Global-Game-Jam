/**
 * Created by Thomas on 1/25/14.
 */

// Initialization functions
loadFiles();

window.onload=function(){
    setTimeout(function(){mainPhaser();}, 3000);
};

// JS file preloader
function loadFiles(){
    var head = document.getElementsByTagName("head")[0];
    for( var i=0; i<files.length; i++ ){
        var js = document.createElement("script");
        js.type = "text/javascript";
        js.src = "src/"+files[i];
        head.appendChild(js);
    }
}


function mainPhaser(){
    var game = new Phaser.Game(1280, 1024, Phaser.CANVAS, 'gameCanvas', { preload: preload, create: create, update: update, render: render });
    game.focus = false;
    game.createSprite = function(x, y, key){return this.add.sprite(x, y, String(key));};
    $(window).focus(function() {game.focus = true;}).blur(function() {game.focus = false;});

    setInterval(function () {
        // console.log(game.focus);
    }, 1000);


    var map;
    var camera;
    var player,inputsKeyboard, inputsMouse;

    function gofull() {
        game.stage.scale.startFullScreen();
    }

    function preload() {
        game.load.image('h_red','img/h_red.png');
        
        game.load.image('w_red','img/wave_red.png');
        game.load.image('w_blue','img/wave_blue.png');
        game.load.image('w_green','img/wave_green.png');
        game.load.image('w_yellow','img/wave_yellow.png');
        game.load.image('w_purple','img/wave_purple.png');

        game.load.image('obstacle','img/obstacle.png');
        game.load.image('greenline', 'img/greenline.png');
        game.load.image('meteor', 'img/meteor.png');
        /*game.load.spritesheet('greenline', 'img/greenline.png', 100, 64, 30);
        game.load.spritesheet('meteor', 'img/meteor.png', 50, 50, 30);*/
    }

    function create() {
        // map = createMap(game);
        map = createMapProcedural(game);


        player = new Player('red',game);
        player.setSprite(game.add.sprite(200,200,'w_'+player.type.color.toLowerCase()));
        player.sprite.scale = new Phaser.Point(2*player.life,2*player.life);

        game.input.onDown.add(gofull, this);

        game.camera.follow(player.sprite);

        inputsKeyboard = game.input.keyboard.createCursorKeys();
        inputsMouse = game.input.mousePointer; 
        player.sonar(game);
    }

    function update () {
        // if(!game.focus) return;
        player.moveK(inputsKeyboard, game);
        player.moveM(inputsMouse);
        player.farAway(game, player);

        // check for collision over the player's sonar
        if(player.type.color == 'red'){
            game.physics.collide(player.sonarPts,map.obstaclesRed,function(pt,ob){
                player.sonarCollision(pt,game);
            });
        }
       
       if(player.type.color == 'blue'){
            game.physics.collide(player.sonarPts,map.obstaclesBlue,function(pt,ob){
                player.sonarCollision(pt,game);
            });
        }
       
       if(player.type.color == 'green'){
            game.physics.collide(player.sonarPts,map.obstaclesGreen,function(pt,ob){
                player.sonarCollision(pt,game);
            });
        }
       

        // console.log(player.sprite,map.obstaclesRed);
        game.physics.collide(player.sprite,map.obstaclesRed,function(pl,ob){
            player.loseLife();
        });
        game.physics.collide(player.sprite,map.obstaclesBlue,function(pl,ob){
            player.loseLife();
        });
        game.physics.collide(player.sprite,map.obstaclesGreen,function(pl,ob){
            player.loseLife();
        });

        // map.streams.forEach(function(stream){
        //     var minDist = 100;
        //     var param = stream.getForce(player.sprite,game);
        //     if(param.distance < minDist){
        //         minDist = param.distance;
        //         player.applyForce(param.force,stream.x,stream.y,game);
        //     }
        // });

}


function collideHandler() {
    console.log("coucou");
}

function render (){
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

