/**
 * Created by Thomas on 1/25/14.
 */
var Stream = new Class
({
    initialize: function (direction, force, posX, posY, radius)
    {
        this.direction = direction;
        this.force = force;
        this.posX = posX;
        this.posY = posY;
        this.radius = radius;
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

    create: function(game){
        var graphics = game.add.graphics(this.posX,this.posY);

        // set a fill and line style
        graphics.beginFill(0xFF0000);
        graphics.lineStyle(10, 0xFF0000, 1);

        // draw a shape
        graphics.moveTo(this.posX,this.posY);
        graphics.lineTo(250, 50);
        graphics.endFill();
    }
});