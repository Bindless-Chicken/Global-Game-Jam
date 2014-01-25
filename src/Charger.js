var Charger = new Class
(Enemy,{
	initialize: function (game, pos_x, pos_y, name, sprite, range, strengh)
	{
		super(game, pos_x, pos_y, name, sprite);
		this.range = range;
		this.strength = strengh;
	},

	attack: function(player)
	{
		game.physics.moveToXY(this.sprite, player.sprite.x, player.sprite.y, 250);		
	},

	reachable: function(player)
	{
		if(((Math.sqrt(abs(player.sprite.x-this.sprite.x))) + (Math.sqrt(abs(player.sprite.y-this.sprite.y)))) <= Math.sqrt(this.range))
		{
			attack(player_x, player_y);
		}			
	}

})