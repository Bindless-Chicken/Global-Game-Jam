var Map = new Class
({
    initialize: function (sectors, obstacles)
    {
        this.sectors = sectors;
        this.obstacles = obstacles;
    },

    setSectors: function(sectors)
    {
        this.sectors = sectors;
    },

    getSectors: function()
    {
        return this.sectors;
    },

    setObstacles: function(obstacles)
    {
        this.obstacles = obstacles;
    },

    getObstacles: function()
    {
        return this.obstacles;
    }

});