/**
 * Created by Thomas on 1/25/14.
 */
var Stream = new Class
({
    initialize: function (game, direction, force, posX, posY, radius, length) {
        this.direction = direction;
        this.force = force;
        this.posX = posX;
        this.posY = posY;
        this.radius = radius;
        this.length = length;
        this.create(game);
    },

    setDirection: function(direction)
    {
        this.direction = direction;
    },

    getDirection: function()
    {
        return this.direction;
    },

    setForce: function(force)
    {
        this.force = force;
    },

    getForce: function()
    {
        return this.force;
    },

    setPosX: function(posX)
    {
        this.posX = posX;
    },

    getPosX: function()
    {
        return this.posX;
    },

    setPosY: function(posY)
    {
        this.posY = posY;
    },

    getPosY: function()
    {
        return this.posY;
    },

    getLength: function () {
        return this.length;
    },

    create: function(game){
        var graphics = game.add.graphics(this.posX,this.posY);

        // set a fill and line style
        graphics.beginFill(0xFF0000);
        graphics.lineStyle(10, 0xFF0000, 1);

        // draw a shape
        graphics.moveTo(this.posX,this.posY);

        var finalX, finalY;
        if ((this.direction < 90) && (this.direction > 0)) {
            finalX = this.posX + this.length * Math.cos(this.direction);
            finalY = this.posY + this.length * Math.cos(this.direction);
        }
        else if ((this.direction > 45) && (this.direction < 90)) {
            finalX = this.posX + this.length * Math.cos(180 - this.direction);
            finalY = this.posY - this.length * Math.cos(180 - this.direction);
        }
        else if ((this.direction > -45) && (this.direction < 0)) {
            finalX = this.posX - this.length * Math.cos(this.direction);
            finalY = this.posY + this.length * Math.cos(this.direction);
        }
        else {
            finalX = this.posX - this.length * Math.cos(180 - this.direction);
            finalY = this.posY - this.length * Math.cos(180 - this.direction);
        }
        console.log("finalX | finalY : " + finalX + " | " + finalY);
        graphics.lineTo(finalX, finalY);
        graphics.endFill();
    }

});