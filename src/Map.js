var Map = new Class
({
    initialize: function (sectors, game)
    {
        this.sectors = sectors;
        this.obstacles = game.add.group();
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