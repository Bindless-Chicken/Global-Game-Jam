/**
 * Created by Thomas on 1/25/14.
 */

// Initialization functions
loadFiles();

window.onload=function(){
    setTimeout(function(){mainPhaser()}, 3000);
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
    var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameCanvas', { preload: preload, create: create, update: update, render: render });
    game.focus = false;
    game.createSprite = function(x, y, key){return this.add.sprite(x, y, String(key));};
    $(window).focus(function() {game.focus = true;}).blur(function() {game.focus = false;});

    setInterval(function () {
        console.log(game.focus);
    }, 1000);


    var map;
    var camera;
    var player,inputsKeyboard, inputsMouse;

    function preload() {
        game.load.image('h_red','img/h_red.png');
        game.load.image('w_red','img/wave_red.png');
    }

    function create() {
        map = createMap(game);
        player = new Player('red',game);
        player.setSprite(game.add.sprite(200,200,'w_red'));

        game.camera.follow(player.sprite);

        // var stream = new Stream(45, 10, 100, 500, 10);
        // stream.create(game);
        // var a = new Obstacle(game, 400, 400, "w_red", COLORS.RED);

        inputsKeyboard = game.input.keyboard.createCursorKeys(); // bind the keyboard/mouse to inputs
        inputsMouse = game.input.mousePointer; // bind the keyboard/mouse to inputsb
        player.sonar(game);
    }

    function update () {
        // if(!game.focus) return;
        player.moveK(inputsKeyboard);
        player.moveM(inputsMouse);

        // check for collision over the player's sonar
        game.physics.collide(player.sonarPts,map.obstacles,function(pt,ob){
            pt.body.velocity = new Phaser.Point(0,0); //  we stop the point
            pt.lifespan = pt.lifespan + Math.random()*100; // add a little delay
            pt.scale =  new Phaser.Point(2,2); 
        });

        game.physics.collide(player.sprite,map.obstacles,function(){});
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

        console.log("X : "+player.sprite.x+" | Y : "+player.sprite.y);
        var m = map.getObstacles();

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

