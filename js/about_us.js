var  i = 0;
var state = true;
var draw_str = "ABOUT US";


/* Simple function to toggle a string state */
function blink() {
    if (state) {
        document.getElementById("animated_text1").innerHTML = "<\t/\t>"
        state = !state;
    } else {
        state = !state;
        document.getElementById("animated_text1").innerHTML = "<\t\t\t>"
    }
    setTimeout(blink,500);
}


/* Simple function to draw char by char the draw_str by appending to
 * inner html
 */
function effect() {
    if(i<draw_str.length) {
        document.getElementById("animated_text").innerHTML += draw_str.charAt(i++);
        setTimeout(effect,100);
    } else {
        blink();
    }
}

effect();