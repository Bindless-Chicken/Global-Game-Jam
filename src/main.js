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
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    var player,inputs;

    function preload() {
        game.load.image('h_red','img/h_red.png');
    }

    function create() {
        player = new Player('red');
        player.setSprite(game.add.sprite(0,0,'h_red'));
        game.camera.follow(player.sprite);
        
        inputs = game.input.keyboard.createCursorKeys(); // bind the keyboard/mouse to inputs
    }

    function update () {
        player.move(inputs);
        
    }
}

