var Map = new Class
({
    initialize: function (sectors, game)
    {
        this.sectors = sectors;
        this.obstaclesRed = game.add.group();
        this.obstaclesBlue = game.add.group();
        this.obstaclesGreen = game.add.group();
        this.stream = Stream;
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

    getObstaclesRed: function()
    {
        return this.obstaclesRed;
    },

    getObstaclesBlue: function()
    {
        return this.obstaclesBlue;
    },

    getObstaclesGreen: function()
    {
        return this.obstaclesGreen;
    }

});