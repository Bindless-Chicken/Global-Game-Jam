var Sector = new Class
({
    initialize: function (radius, event)
    {
        this.radius = radius;
        this.event = event;
    },

    addEvent: function(event)
    {
        this.event.push(event);
    },

    setRadius: function(radius)
    {
        this.radius = radius;
    },

    getRadius: function()
    {
        return this.radius;
    }
});