/**
 * Created by Seb on 25/01/14.
 */

 var Player = new Class({
    initialize: function (color,game) {
        this.mouseX = 0;
        this.mouseY = 0;
        this.sprite = null;
        this.type = new Type(color);
        this.speed = 150;
        this.firstDown = false;
        this.life = 3;

        // sonar options
        this.nbPoints = 150;
        this.nbMaxoints = 500; // 200 + 100 to be sure tto have enough points
        this.sonarPts = game.add.group();
        this.sonarPts.createMultiple(this.nbMaxoints,'w_red');
        this.sonarSpeed = 900;
    },

    setSprite: function (sprite){
        this.sprite = sprite;
        this.sprite.body.bounce = new Phaser.Point(2,2);
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
        // if(!game.focus){
            if(this.sonarPts.countDead() <= this.nbPoints){ 
                console.log("too less deadPoints !",this.sonarPts.countDead() );
            }
            else{
                for(var i = 0; i < this.nbPoints ; i ++){
                    var destPt = new Phaser.Point(this.sprite.body.center.x, this.sprite.body.center.y)
                    Phaser.Point.rotate(destPt, this.sprite.body.center.x, this.sprite.body.center.y,360/this.nbPoints * i, true, 100);

                    var pt = this.sonarPts.getFirstDead();
                    // var pt = this.sonarPts.getRandom();
                    pt.reset(this.sprite.body.center.x, this.sprite.body.center.y);
                    pt.scale = new Phaser.Point(1,1);
                    pt.lifespan = 1550 + Math.random()*300;
                    game.physics.moveToXY(pt, destPt.x, destPt.y, 90 + Math.random()*2);
                }
            }
        // }

        var _= this;
        setTimeout(function(){
            _.sonar(game);
        }, this.sonarSpeed + Math.random()*10);
    },
    applyForce : function (force,x,y,game) {
        game.physics.accelerateToXY(this.sprite, x, y, -force);
    }
});


