var Obstacle = new Class({
    initialize: function (game, size_x, size_y, image, color) {
        this.sprite = new Phaser.Sprite(game, size_x, size_y, image);
        this.sprite.body.immovable = true;
        this.type = new Type(color);
    },

    setSprite: function (sprite) {
        this.sprite = sprite;
        this.sprite.body.immovable = true;
    },

    getSprite: function () {
        return this.sprite;
    },

    setType: function(type)
    {
        this.type = type;
    },

    getType: function()
    {
        return this.type.color;
    }
})