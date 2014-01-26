var Charger = new Class
({
	initialize: function (game, pos_x, pos_y, name, sprite, healthpoint, range, strengh)
	{
		this.name = name;
		this.sprite = game.add.sprite(pos_x,pos_y,sprite);
        this.hp = healthpoint | 50;
        this.range = range | 250;
        this.strength = strengh | 10;
        this.dead = false;
    },

	attack: function(player, game)
	{
		game.physics.moveToXY(this.sprite, player.sprite.x, player.sprite.y, 75);
	},

	reachable: function(player, game)
	{
		// console.log(((Math.sqrt(Math.abs(player.sprite.x-this.sprite.x))) + (Math.sqrt(Math.abs(player.sprite.y-this.sprite.y))))+" vs "+ Math.sqrt(this.range));
		if(((Math.sqrt(Math.abs(player.sprite.x-this.sprite.x))) + (Math.sqrt(Math.abs(player.sprite.y-this.sprite.y)))) <= Math.sqrt(this.range))
		{
			//console.log("ATTACKED ! ");
			this.attack(player, game);
			if((player.sprite.x > this.sprite.x) && (player.sprite.y > this.sprite.y))
			{
				player.getPush(player, 500, 500);
				//this.sprite.angle = Math.atan2(Math.abs(player.sprite.y - this.sprite.y), Math.abs(player.sprite.x - this.sprite.x));
				this.sprite.angle = 90;
			}
			else if((player.sprite.x > this.sprite.x) && (player.sprite.y < this.sprite.y))
			{
				player.getPush(player, 500, -500);
				//this.sprite.angle = Math.atan2(Math.abs(player.sprite.y - this.sprite.y), Math.abs(player.sprite.x - this.sprite.x));
				this.sprite.angle = 0;
			}
			else if((player.sprite.x < this.sprite.x) && (player.sprite.y > this.sprite.y))
			{
				player.getPush(player, -500, 500);
				this.sprite.angle = 180;
				/*this.sprite.angle = Math.atan2(Math.abs(player.sprite.y - this.sprite.y), Math.abs(player.sprite.x - this.sprite.x));*/
			}
			else
			{
				player.getPush(player, -500, -500);
				this.sprite.angle = 270;/*
				this.sprite.angle = Math.atan2(Math.abs(player.sprite.y - this.sprite.y), Math.abs(player.sprite.x - this.sprite.x));*/
			}			
		}
	},

	isDead: function() {
		if(this.getHp() <= 0)
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


function createCharger(game,i) {
    var charger = new Charger(game, 100 + i * 50, 150 + i * 50, "charger", 'charger', 50, 250, 10);
    return charger;
}

function createDefaultCharger(game, x, y) {
    var charger = new Charger(game, x, y, "charger", 'charger');
    return charger;

}

function createProceduralEnemy(game) {

<<<<<<< HEAD
    var charger = new Array();

    for (var i = 0; i < 20; i++) {
        charger.push(createDefaultCharger(game, Math.random()*3000-1500, Math.random()*3000-1500));
    };

    return charger;
}
=======
	var charger = new Array();

	for (var i = 0; i < 20; i++) {
            charger.push(createDefaultCharger(game, Math.random()*3000-1500, Math.random()*3000-1500));
    };

    return charger;
}
>>>>>>> bb48d5ed95e6ba420b8aefdbc6dc71a85f3b4013
