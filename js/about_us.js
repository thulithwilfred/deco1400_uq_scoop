var  i = 0;
var state = true;
var draw_str = "ABOUT US";


/* Toggle the string based on the `state` to show blinking effect */
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


/* Draw the hardcoded "draw_str" character by character with a 100ms delay between */
function effect() {
    if(i<draw_str.length) {
        document.getElementById("animated_text").innerHTML += draw_str.charAt(i++);
        setTimeout(effect,100);
    } else {
        blink();
    }
}

effect();