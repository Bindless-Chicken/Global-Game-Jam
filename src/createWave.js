function createWave(game, position_x, position_y, rayon, lifetime){
    var points = new Array(rayon);
    var velocity_x = new Array(rayon);
    var velocity_y = new Array(rayon);
    var timer = lifetime;

    
    function initWave(){
        var r = rayon;
        
        var x=0;
        var y=r;

        p=3-(2*r);

        for(x=0;x<=y;x++)
        {
            if (p<0)
            {
                p=(p+(4*x)+6);
            }
            else
            {
                y=y-1;
                p=p+((4*(x-y)+10));
            }


            points[x+(x*7)] = new Phaser.Point(position_x+x,poisiton_y-y);
            points[x+1+(x*7)] = new Phaser.Point(position_x-x,poisiton_y-y);
            points[x+2+(x*7)] = new Phaser.Point(position_x+x,poisiton_y+y);
            points[x+3+(x*7)] = new Phaser.Point(position_x-x,poisiton_y+y);
            points[x+4+(x*7)] = new Phaser.Point(position_x+y,poisiton_y-x);
            points[x+5+(x*7)] = new Phaser.Point(position_x-y,poisiton_y-x);
            points[x+6+(x*7)] = new Phaser.Point(position_x+y,poisiton_y+x);
            points[x+7+(x*7)] = new Phaser.Point(position_x-y,poisiton_y+x);

            velocity_x[x+(x*7)] = (position_x-points[x+(x*7)].x)/40;
            velocity_x[x+1+(x*7)] = (position_x-points[x+1+(x*7)].x)/40;
            velocity_x[x+2+(x*7)] = (position_x-points[x+2+(x*7)].x)/40;
            velocity_x[x+3+(x*7)] = (position_x-points[x+3+(x*7)].x)/40;
            velocity_x[x+4+(x*7)] = (position_x-points[x+4+(x*7)].x)/40;
            velocity_x[x+5+(x*7)] = (position_x-points[x+5+(x*7)].x)/40;
            velocity_x[x+6+(x*7)] = (position_x-points[x+6+(x*7)].x)/40;
            velocity_x[x+7+(x*7)] = (position_x-points[x+7+(x*7)].x)/40;

            velocity_y[x+(x*7)] = (poisiton_y-points[x+(x*7)].y)/40;
            velocity_y[x+1+(x*7)] = (poisiton_y-points[x+1+(x*7)].y)/40;
            velocity_y[x+2+(x*7)] = (poisiton_y-points[x+2+(x*7)].y)/40;
            velocity_y[x+3+(x*7)] = (poisiton_y-points[x+3+(x*7)].y)/40;
            velocity_y[x+4+(x*7)] = (poisiton_y-points[x+4+(x*7)].y)/40;
            velocity_y[x+5+(x*7)] = (poisiton_y-points[x+5+(x*7)].y)/40;
            velocity_y[x+6+(x*7)] = (poisiton_y-points[x+6+(x*7)].y)/40;
            velocity_y[x+7+(x*7)] = (poisiton_y-points[x+7+(x*7)].y)/40;

        }
    }

    function updateWave() {
        for (var i = 0; i < points.length; i++) {
            points[i].x = points[i].x - velocity_x[i];
            points[i].y = points[i].y - velocity_y[i];
            timer = timer - 1;
        };

    }

    function renderWave() {             

        for (var i = 0; i < points.length; i++) {
            game.context.fillStyle = 'rgb(255,0,0)';
            game.context.fillRect(points[i].x, points[i].y, 2, 2);
        };

        if(timer < 0)
        {
            initWave();
            timer = lifetime;
        }           

    }
}