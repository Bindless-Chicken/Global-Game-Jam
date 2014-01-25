/**
 * Created by Thomas on 1/25/14.
 */

// Initialization functions
loadFiles();

window.onload=function(){
    mainPhaser();
}

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
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });
    var map;
    var floor;

    function preload() {

        map = createMap();
    }

    function create() {
        floor = new Phaser.Rectangle(0, 550, 800, 50);
    }

    function update () {

    }

    function render (){
        game.debug.renderRectangle(floor,'#0ff22f');

        //for(var obstacle in  map.getObstacles()){
        //    game.debug.renderRectangle(map.getObstacles()[obstacle].getRectangle(),'#022ff22');
        //    console.log(map.getObstacles()[obstacle].getRectangle());
        //}
    }
}