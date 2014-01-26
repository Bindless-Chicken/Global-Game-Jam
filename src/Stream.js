/**
 * Created by Thomas on 1/25/14.
 */

var Stream = new Class({
    initialize: function (force, x, y, radius){
        this.force = force;
        this.x = x;
        this.y = y;
        this.radius = radius;
    },

    create: function(game){
        var _ = this;
        this.sprite = game.add.sprite(this.x-32,this.y-32,'stream');
        this.sprite.getForce = function (sprite,game) {return  _.getForce(sprite,game);}
        return this.sprite;
    },
    getForce: function(otherSprite,game){
        // console.log(otherSprite.x,otherSprite.y);
        // console.log(this);
        var distance = game.physics.distanceToXY(otherSprite,this.x,this.y);
        // console.log(distance);
        // console.log(this.force);
        if(distance > 100) return 1;
        return {distance : distance ,
                force    : this.force*this.force/(12*distance*distance)*100};
    }

});