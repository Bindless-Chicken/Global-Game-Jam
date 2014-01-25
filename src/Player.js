/**
 * Created by Seb on 25/01/14.
 */

var Player = new Class({
    initialize: function (color) {
        this.mouseX = 0;
        this.mouseY = 0;
        this.sprite = null;
        this.type = new Type(color);
        this.speed = 200;
        this.firstDown = false;
        // sonar options
        this.nbPoints = 100;
    },
    setSprite: function (sprite){
        this.sprite = sprite;
    },
    moveK: function (inputs) {
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
    moveM: function (inputs) {
        if(inputs.isDown){
            if(!this.firstDown){
                this.mouseY = inputs.y;
                this.mouseX = inputs.x;
                this.firstDown = true;
            }

            // Right
            this.sprite.body.velocity.x-=1.25*(this.mouseX-inputs.x);
            this.sprite.body.velocity.y-=1.25*(this.mouseY-inputs.y);

            this.mouseY = inputs.y;
            this.mouseX = inputs.x;
        }
        else{
            this.firstDown = false;
            this.sprite.body.velocity.x = this.sprite.body.velocity.x*0.97;
            this.sprite.body.velocity.y = this.sprite.body.velocity.y*0.97;
        }
    },
    sonar: function(game){
        for(var i = 0; i < this.nbPoints; i ++){
            var destPt = Phaser.Point.rotate(
                (new Phaser.Point(this.sprite.body.center.x
                    , this.sprite.body.center.y))
                , this.sprite.body.center.x
                , this.sprite.body.center.y
                ,360/this.nbPoints * i
                ,true, this.nbPoints);

            var pt = game.add.sprite(this.sprite.body.center.x, this.sprite.body.center.y, 'w_red');
            pt.lifespan = 1550 + Math.random()*300;
            game.physics.moveToXY(pt, destPt.x, destPt.y, 90 + Math.random()*10);
        }

        var _= this;
        setTimeout(function(){_.sonar(game);}, 900 + Math.random()*10);
    }
});


