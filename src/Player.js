/**
 * Created by Seb on 25/01/14.
 */


var Player = new Class
({

    initialize: function (color) {
        this.sprite = null;
        this.type = new Type(color);
        this.speed = 200;

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
    }

});


