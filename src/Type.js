/**
 * Created by Seb on 25/01/14.
 */


var Type = new Class({
    initialize: function (col) {
        if (col != undefined) {
            this.color = col;
            this.power = col.power;
        }
        else
            this.color = COLORS.RED;

        this.radars = [];
    }

});
