var Spammer = new Class
(Enemy,{
	initialize: function(game, pos_x, pos_y, name, sprite, colorSpam) {
		super(game, pos_x, pos_y, name, sprite);
		this.color = colorSpam;
	},

	Spam: function() {
		for(var i = 0; i < this.nbPoints; i ++){
            var destPt = Phaser.Point.rotate(
                (new Phaser.Point(this.sprite.body.center.x, this.sprite.body.center.y)), this.sprite.body.center.x, this.sprite.body.center.y,360/this.nbPoints * i,true, this.nbPoints);

            var pt = game.add.sprite(this.sprite.body.center.x, this.sprite.body.center.y, 'w_red');
            pt.lifespan = 2000 + Math.random()*300;
            game.physics.moveToXY(pt, destPt.x, destPt.y, 90 + Math.random()*10);
        }
	},

	move: function(){
		game.physics.moveToXY(this.sprite, this.sprite.x+10+ Math.random()*10, this.sprite.y+1°+ Math.random()*5, 90 + Math.random()*10);
	}

})