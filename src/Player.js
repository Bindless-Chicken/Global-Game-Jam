/**
 * Created by Seb on 25/01/14.
 */


var Player = new Class
({
    initialize: function (color) {
        this.mouseX = 0;
        this.mouseY = 0;
        this.sprite = null;
        this.type = new Type(color);
        this.speed = 200;
        this.firstDown = false;
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
    }

});


