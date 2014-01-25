/**
 * Created by Thomas on 1/25/14.
 */

// Initialization functions
loadFiles();

window.onload=function(){
    mainPhaser();
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
    var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update, render: render });
    var map;
    var camera;
    var player,inputsKeyboard, inputsMouse;

    var destPoints = [];

    function preload() {
        game.load.image('h_red','img/h_red.png');
        game.load.image('h_blue', 'img/h_blue.png');
        game.load.image('w_red','img/wave_red.png')
        map = createMap(game);
    }

    function create() {
        player = new Player('red');
        player.setSprite(game.add.sprite(200,200,'h_red'));


        game.camera.follow(player.sprite);


        //var a = new Obstacle(game, 400, 400, "w_red", COLORS.RED);

        inputsKeyboard = game.input.keyboard.createCursorKeys(); // bind the keyboard/mouse to inputs
        inputsMouse = game.input.mousePointer; // bind the keyboard/mouse to inputsb
        player.sonar(game);


    }

    function update () {
        player.moveK(inputsKeyboard);
        player.moveM(inputsMouse);

        //check for collision
        var m = map.getObstacles();
//        console.debug("x|y : " + player.sprite.body.x + " | " + player.sprite.body.y);


        for (var i = 0; i < m.total; i++) {
//            console.debug("x|y : " + m.getAt(i).body.x + " | " + m.getAt(i).body.y);
            if (game.physics.collide(player, m.getAt(i)) == true) {
                console.log("collision with object nb " + i);
            }
        }
//        game.physics.collide(player, this.box, collideHandler, null, this);

        //check streams
//        var dist, velY, velX;
//        var streams = map.getStreams();
//        var s;
//        console.debug(map.getStreams().length);
//        for(var i = 0; i < streams.length; i++)
//        {
//            s = streams[i];
//            dist = Phaser.physics.distanceBetween(player, s);
//
//            console.log("dist  = " + dist);
//            if(Math.abs(dist) < s.radius)
//            {
//                console.log("coucou");
//                //We are in the area of the stream
//
////                if(player.body.position.x  > )
////                {
//                    velY = (s.radius - dist) * Math.tan(s.getDirection());
//                    velX = (s.radius - dist) * Math.tan(s.getDirection());
////                }
//
//                player.sprite.body.velocity.x += velX;
//                player.sprite.body.velocity.y += velY;
//
//
//            }
//        }
    }

//    function collideHandler(i) {
//        console.log("collision with object nb " + i);
//    }

    function render (){

        var m = map.getObstacles();

//         console.log("size = " + m.total);
//        console.debug(m);

        for (var i = 0; i < m.total; i++) {
            {
//                console.log("obs = " + i);
//                console.log(m.getAt(i));
                game.debug.renderSpriteBody(m.getAt(i), '#022ff22');
            }

        }
    }
}

