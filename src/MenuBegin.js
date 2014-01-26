/**
 * Created by Seb on 26/01/14.
 */

function printMenu(game) {


    //Clear the previous view
    //document.getElementById("bandeau").innerHTML = "";

    var body = document.getElementsByTagName("body")[0];
    body.setAttribute("style", "background:url('img/first.png') no-repeat center center fixed");
    body.setAttribute("style", "background-size: cover");

    var menu = document.createElement("div");
    menu.setAttribute("id", "MenuBegin");
    menu.setAttribute("style", "height:100%");
    menu.setAttribute("style", "width:100%");
    menu.setAttribute("style", "background:url('img/first.png') no-repeat 50% 0%");
//    menu.setAttribute("style", "background-image: url('img/first.png')");
    body.appendChild(menu);

//    var img = document.createElement("img");
//    img.setAttribute("src" ,"img/first.png");
//    img.setAttribute("align", "center");
//    menu.appendChild(img);


//    document.getElementById("gameCanvas").clearRect(0, 0, canvas.width, canvas.height);
//    var title = document.createElement("h1");
//    document.createTextNode("Sound of the pond");
//    menu.appendChild(title);

    //Create the first button
    var button = document.createElement("buttonMenu");
    var text = document.createTextNode("Solo");
    button.appendChild(text);
    button.setAttribute("position", "fixed");
    button.className = "buttonMenu";
    button.setAttribute("top", "50%");
    button.setAttribute("left", "50%");
    //button.addEvent(createMapProcedural(game, 1));
    body.appendChild(button);


    //Create the second button
    button = document.createElement("buttonMenu");
    text = document.createTextNode("2 Players");
    button.appendChild(text);
    button.className = "buttonMenu";
    //button.addEvent(createMapProcedural(game, 2));
    menu.appendChild(button);


    //Print the menu
}
