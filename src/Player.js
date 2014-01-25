/**
 * Created by Seb on 25/01/14.
 */

var Player = new Class({
    initialize: function (color,game) {
        this.mouseX = 0;
        this.mouseY = 0;
        this.sprite = null;
        this.type = new Type(color);
        this.speed = 200;
        this.firstDown = false;
        this.life = 3;

        // sonar options
        this.nbPoints = 150;
        this.nbMaxoints = 500; // 200 + 100 to be sure tto have enough points
        this.sonarPts = game.add.group();
        this.sonarPts.createMultiple(this.nbMaxoints,'w_'+color.toLowerCase());
        this.sonarSpeed = 900;
    },

    setSprite: function (sprite){
        this.sprite = sprite;
        this.sprite.body.bounce = new Phaser.Point(2,2);
        // this.sprite.type = this.type;
    },

    parseColor: function (game, player, color) {
        this.type = new  Type(color);
        this.sonarPts.removeAll();
        this.sonarPts.createMultiple(this.nbMaxoints,'w_'+color.toLowerCase());
        var x = this.sprite.x;
        var y = this.sprite.y;
        this.sprite.destroy();
        this.setSprite(game.add.sprite(x,y,'w_'+player.type.color.toLowerCase()));
        this.sprite.scale = new Phaser.Point(2*player.life,2*player.life);
    },

    setType: function(player, game) {
        var colorArray = new Array();
        colorArray.push("RED");
        colorArray.push("BLUE");
        colorArray.push("GREEN");
        colorArray.push("YELLOW");
        colorArray.push("PURPLE");
        

        for (var i = 0; i < 5; i++) {
            if(colorArray[i] == player.type.color.toUpperCase())
            {
                 var rand = i;
            }               
        };

        if(rand == 4)
        {
            rand = 0;
        }
        else
        {
            rand++;
        }
        console.log(rand);

        this.parseColor(game, player, colorArray[rand]);       
    },

    moveK: function (inputs, game) {
        if (inputs.left.isDown)
            this.sprite.body.velocity.x = -this.speed;
        else
            this.sprite.body.velocity.x = this.sprite.body.velocity.x*0.97;
        
        if (inputs.right.isDown)
            this.sprite.body.velocity.x = this.speed;
        else
            this.sprite.body.velocity.x = this.sprite.body.velocity.x*0.97;

        if (inputs.up.isDown)
            this.sprite.body.velocity.y = -this.speed;
        else
            this.sprite.body.velocity.y = this.sprite.body.velocity.y*0.97;
        
        if (inputs.down.isDown)
            this.sprite.body.velocity.y = this.speed;
        else
            this.sprite.body.velocity.y = this.sprite.body.velocity.y*0.97;

        if(game.input.keyboard.justPressed(32,100))
            this.setType(this, game);
    },
    moveM: function (inputs) {
        if(inputs.isDown){
            if(!this.firstDown){
                this.mouseY = inputs.y;
                this.mouseX = inputs.x;
                this.firstDown = true;
            }
            // Right
            this.sprite.body.velocity.x-=1.25*(this.mouseX-inputs.x);
            this.sprite.body.velocity.y-=1.25*(this.mouseY-inputs.y);

            this.mouseY = inputs.y;
            this.mouseX = inputs.x;
        }
        else{
            this.firstDown = false;
            this.sprite.body.velocity.x = this.sprite.body.velocity.x*0.97;
            this.sprite.body.velocity.y = this.sprite.body.velocity.y*0.97;
        }
    },
    sonar: function(game){
        // if(!game.focus){
            if(this.sonarPts.countDead() <= this.nbPoints){ 
                console.log("too less deadPoints !",this.sonarPts.countDead() );
            }
            else{
                for(var i = 0; i < this.nbPoints ; i ++){
                    var destPt = new Phaser.Point(this.sprite.body.center.x, this.sprite.body.center.y)
                    Phaser.Point.rotate(destPt, this.sprite.body.center.x, this.sprite.body.center.y,360/this.nbPoints * i, true, 100);

                    var pt = this.sonarPts.getFirstDead();
                    // var pt = this.sonarPts.getRandom();
                    pt.reset(this.sprite.body.center.x, this.sprite.body.center.y);
                    pt.scale = new Phaser.Point(1,1);
                    pt.lifespan = 1550 + Math.random()*300;
                    game.physics.moveToXY(pt, destPt.x, destPt.y, 90 + Math.random()*2);
                }
            }
        // }

        var _= this;
        setTimeout(function(){
            _.sonar(game);
        }, this.sonarSpeed + Math.random()*10);
    },
    sonarCollision : function(pt,game){
        pt.body.velocity = new Phaser.Point(0,0); //  we stop the point
        pt.kill();
        pt.lifespan = 1;//pt.lifespan*2 + Math.random()*100; // add a little delay
        var d = game.add.sprite(pt.x,pt.y,'w_red');
        d.scale = new Phaser.Point(2,2); 
        d.lifespan = 1000;
    },
    loseLife : function (){
        this.life -= 1;
        if(this.life === 0){
            this.sprite.x = 0;
            this.sprite.y = 0;
            this.life = 3;
        }
        this.sprite.scale = new Phaser.Point(2*this.life,2*this.life);
    },
    applyForce : function (force,x,y,game) {
        game.physics.accelerateToXY(this.sprite, x, y, -force);
        ;
    },
    getPush: function(player, value_x, value_y){
        this.sprite.body.velocity.x = value_x;
        this.sprite.body.velocity.y = value_y;
    },
    meteorShower: function(game, player, delay, radius, number){
       var meteorArray = new Array();
       for (var i = 0; i < number; i++) {
        var spriteMeteor = game.add.sprite(300, 200, 'meteor');
        spriteMeteor.animations.add('walk');
        spriteMeteor.animations.play('walk', 20, true);
        spriteMeteor.lifespan = delay;
        meteorArray.push(spriteMeteor);
    };


    for (var i = 0; i < meteorArray.length; i++) {
       if(meteorArray[i].lifespan <= 0)
       {
        meteorArray.remove(i);
    }
};
    },
    linePush: function(game, delay, radius){
        var lineArray = new Array();

        var y = Math.random()*3000;
        y = y-3000;
        var spriteLine = game.add.sprite(-3000, y, 'greenline');
        spriteLine.animations.add('walk');
        spriteLine.animations.play('walk', 20, true);
        spriteLine.lifespan = delay;
        lineArray.push(spriteLine);


        for (var i = 0; i < lineArray.length; i++) {
           if(lineArray[i].lifespan <= 0)
            lineArray.remove(i);
        }
    },
    farAway: function(game, player){        
        var distance = (Math.abs(player.sprite.x)) + (Math.abs(player.sprite.y));
        var randRencontre = Math.random()*1000;
        var randRencontre2 = Math.random()*1000;

        if(distance <= 500){
            //Lvl 1 event
            if((randRencontre > 990) && (randRencontre2 > 990)){
                //Push in an another direction
                console.log("Push Line go !!!");
                player.linePush(game, 1500, 100);
            }
        }
        else if(distance <= 1500){
            if((randRencontre > 990) && (randRencontre2 > 990)){
                //Pop wave going through the screen
                console.log("Push Line lvl 2 go !!!");
                player.linePush(game, player, 1000, 200);
            }
        }
        else if(distance <= 3000) {
            //Lvl 3 Event
            if(randRencontre <= 750){
                //DO nothing
            }
            else if((randRencontre > 990) && (randRencontre2 > 990)){
                //Meteor shower with one and a delay of 2.5s
                console.log("Meteor Shower !! Save your life !!!");
                player.meteorShower(game, player, 1500, 100, 1);
            }
            else if((randRencontre > 995) && (randRencontre2 > 995)){
                //Meteor shower with two and a delay of 1s
                console.log("Meteor Shower lvl2 !! Run fools !!!");
                player.meteorShower(game, player, 800, 100, 2);
            }
        }
    }
});


