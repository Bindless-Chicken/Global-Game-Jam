var Spammer = new Class
({
    initialize: function (game, pos_x, pos_y, name, sprite, colorSpam, healthPoint) {
        this.name = name;
		this.sprite = game.add.sprite(pos_x,pos_y,sprite);
        this.hp = healthPoint | 50;
        if (colorSpam == COLORS.RED)
            this.type = COLORS.RED;
        else if (colorSpam == COLORS.BLUE)
            this.type = COLORS.BLUE;
        else if (colorSpam == COLORS.GREEN)
            this.type = COLORS.GREEN;

    },

    spam: function () {
        for(var i = 0; i < this.nbPoints; i ++){
            var destPt = Phaser.Point.rotate(
                (new Phaser.Point(this.sprite.body.center.x, this.sprite.body.center.y)), this.sprite.body.center.x, this.sprite.body.center.y,360/this.nbPoints * i,true, this.nbPoints);

            var pt = game.add.sprite(this.sprite.body.center.x, this.sprite.body.center.y, 'w_red');
            pt.lifespan = 2000 + Math.random()*300;
            game.physics.moveToXY(pt, destPt.x, destPt.y, 90 + Math.random()*10);
        }
	},

	move: function(){
		game.physics.moveToXY(this.sprite, this.sprite.x+10+ Math.random()*10, this.sprite.y+10+ Math.random()*5, 90 + Math.random()*10);
	},

	isDead: function() {
		if(this.gethp() <= 0)
			return true;
		else
			return false;
	},

	setX: function(pos_x)
	{
		this.sprite.x = pos_x;
	},

	getX: function()
	{
		return this.sprite.x;
	},

	setY: function(pos_y)
	{
		this.sprite.y = pos_y;
	},

	getY: function()
	{
		return this.sprite.y;
	},

	setName: function(name)
	{
		this.name = name;
	},

	getName: function()
	{
		return this.name;
	},

	setSprite: function(sprite)
	{
		this.sprite = sprite;
	},

	getSprite: function()
	{
		return this.sprite;
	},

	setHp: function(healthPoint)
	{
		this.hp = healthPoint;
	},

	getHp: function()
	{
		return this.hp;
	},

	getDmg: function(dmg)
	{
		this.hp -= dmg;
	}

})

function createDefaultSpammer(game, x, y, color) {
    var spammer = new Spammer(game, x, y, "Test", 'spammer', color);
    return spammer;
}


//function createSpammer(game) {
//	var charger = new Charger(game, 100, 150, "Test", 'charger');
//	return charger;
//}
