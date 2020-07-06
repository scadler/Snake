const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
var ctx = canvas.getContext('2d');
var positionsX= [];
var positionsY= [];
document.addEventListener('keydown', keyPressed)
document.addEventListener('keyup', keyUp)
function keyPressed(e){
    key = e.key
    if (key == "a") {
        user.vx = -2
    }
    else if(key == "d"){
        user.vx = 2
    }
    else if (key == "w") {
        user.vy = -2
    }
    else if (key == "s") {
        user.vy = 2
    }
    // else if(key == " ") {
    // e.preventDefault();
    // if(missile.fired === false){
    //     user.remaining -= 1
    //     missile.endX = user.x;
    //     missile.endY = user.y;
    //     missile.fired = true;
    // }
  }
}
function keyUp(e){
    key = e.key
    if (key == "a" || key == "d") {
        user.vx = 0
    }
    else if (key == "w" || key == "s") {
        user.vy = 0
    }
    else if(key == " ") {
    e.preventDefault();
    if(user.lost === true){
    }
}
}