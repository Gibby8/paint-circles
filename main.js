var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_x, last_position_y

color = "black";
widthofline = 1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    widthofline = document.getElementById("width_of_line").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y  e.clientY- canvas.offsetTop;

    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthofline;
        console.log("last position of x and y ");
        console.log("x = " + last_position_x + "y = " + last_position_y);
        ctx.moveTo(last_position_x, last_position_y);
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, 40, 0, 2 * Math.PI)
        console.log("current position of x and y ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_x = current_position_of_mouse_x;
    last_position_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", my_mouse_up);
function my_mouse_up(e){
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouse_leave);
function my_mouse_leave(e){
mouseEvent = "mouseleave";
}

function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}
