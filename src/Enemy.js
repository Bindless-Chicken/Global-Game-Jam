var Enemy = new Class
({
	initialize: function (game, pos_x, pos_y, name, sprite, healthPoint)
	{
		this.name = name;
		this.sprite = new Sprite(game, pos_x, pos_y, sprite);
		this.hp = healthPoint;
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