var  i = 0;
var draw_str = "The UQ Scoop";

/* Simple function to draw char by char the draw_str by appending to
 * inner html
 */
function effect() {
    if(i<draw_str.length) {
        document.getElementById("animated_text2").innerHTML += draw_str.charAt(i++);
        setTimeout(effect,100);
    }
}

effect();