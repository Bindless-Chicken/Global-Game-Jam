/**
 * Created by Seb on 25/01/14.
 */


var Player = new Class({
    initialize: function (color) {
        this.sprite = null;
        this.type = new Type(color);
        this.speed = 200;

        // sonar options
        this.nbPoints = 100;
    },
    setSprite: function (sprite){
        this.sprite = sprite;
    },
    move: function (inputs) {
        if (inputs.left.isDown)
            this.sprite.body.velocity.x = -this.speed;
        else
            this.sprite.body.velocity.x = this.sprite.body.velocity.x*0.97;
        
        if (inputs.right.isDown)
            this.sprite.body.velocity.x = this.speed;
        else
            this.sprite.body.velocity.x = this.sprite.body.velocity.x*0.97;

        if (inputs.up.isDown)
            this.sprite.body.velocity.y = -this.speed;
        else
            this.sprite.body.velocity.y = this.sprite.body.velocity.y*0.97;
        
        if (inputs.down.isDown)
            this.sprite.body.velocity.y = this.speed;
        else
            this.sprite.body.velocity.y = this.sprite.body.velocity.y*0.97;
    },
    sonar: function(game){
        for(var i = 0; i < this.nbPoints; i ++){
            var destPt = Phaser.Point.rotate(
                (new Phaser.Point(this.sprite.center.x
                   ,this.sprite.center.y))
                ,this.sprite.center.x
                ,this.sprite.center.y
                ,360/this.nbPoints * i
                ,true, this.nbPoints);

            var pt = game.add.sprite(this.sprite.center.x,this.sprite.center.y,'w_red');
            pt.lifespan = 1550 + Math.random()*300;
            game.physics.moveToXY(pt, destPt.x, destPt.y, 90 + Math.random()*10);
        }
        var _= this;
        setTimeout(function(){_.sonar(game);}, 900 + Math.random()*10);
    }
});


