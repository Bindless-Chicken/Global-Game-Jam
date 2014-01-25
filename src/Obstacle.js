var Obstacle = new Class({
    initialize: function (rectangle, type)
    {
        this.rectangle = rectangle;
        this.type = type;
    },

    setRectangle: function(rectangle)
    {
        this.rectangle = rectangle;
    },

    getRectangle: function()
    {
        return this.rectangle;
    },

    setType: function(type)
    {
        this.type = type;
    },

    getType: function()
    {
        return this.type;
    }
})