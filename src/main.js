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
        game.load.image('w_red','img/wave_red.png')
        map = createMap(game);
    }

    function create() {
        player = new Player('red');
        player.setSprite(game.add.sprite(200,200,'h_red'));


        game.camera.follow(player.sprite);

        var stream = new Stream(45, 10, 100, 500, 10);
        stream.create(game);

        inputsKeyboard = game.input.keyboard.createCursorKeys(); // bind the keyboard/mouse to inputs
        inputsMouse = game.input.mousePointer; // bind the keyboard/mouse to inputsb
        player.sonar(game);
    }

    function update () {
        player.moveK(inputsKeyboard);
        player.moveM(inputsMouse);


    }

    function render (){
        for(var obstacle in  map.getObstacles()){
            //game.debug.renderRectangle(map.getObstacles()[obstacle].getRectangle(),'#022ff22');
        }   
    }
}

