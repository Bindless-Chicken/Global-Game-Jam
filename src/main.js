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
        game.camera.follow(player);
    }

    function create() {
        player = game.add.sprite(0,0,'h_red');
        inputs = game.input.keyboard.createCursorKeys(); // bind the keyboard/mouse to inputs
    }

    function update () {
        move(player,inputs);
        
    }
}

// ################ TO MOVE ! ##################
// function to put in the player class
function move(player,inputs){
    var speed = 200; // to replace by the field in the player class

    if (inputs.left.isDown)
            player.body.velocity.x = -speed;
        else if (inputs.right.isDown)
            player.body.velocity.x = speed;
        else
            player.body.velocity.x = (player.body.velocity.x < 0)?0:player.body.velocity.x - 5;

        if (inputs.up.isDown)
            player.body.velocity.y = -speed;
        else if (inputs.down.isDown)
            player.body.velocity.y = speed;
        else
            player.body.velocity.y = (player.body.velocity.y < 0)?0:player.body.velocity.y - 5;
}



