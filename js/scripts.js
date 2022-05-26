/* Globals */
var cursor_r = 0;
var cursor_g = 0;
var cursor_b = 0;

var colGrad_lowerB = 0x552586;
var colGrad_upperB = 0xB589D6;
var inc_upper = 0;
var inc_lower = 0;
var colGrad2_lowerB = 0x7f7196;
var colGrad2_upperB = 0xbfb8ca;

/* Mobile Animations */
var list = document.getElementById("navMenu-list");
list.style.maxHeight = "0px";

/**
 * Zoom in on navbar icons on hover
 */
function image_pop(index) {
    let elements = document.getElementsByClassName('wide-only');

    if (index >= elements.length) {
        console.error("nav icon index out of bounds")
        return;
    }

    elements[index].style.transform = "scale(1.5)";
    elements[index].style.filter = "invert(1.0)";
}

/**
 * Zoom out on navbar icons out of hover
 */
function image_sqz(index) {
    let elements = document.getElementsByClassName('wide-only');

    if (index >= elements.length) {
        console.error("nav icon index out of bounds")
        return;
    }

    elements[index].style.transform = "scale(1.0)";
    elements[index].style.filter = "invert(0.0)";
}

/**
 * Function to toggle the display height of the navigation menu
 *  on mobile displays.
 */
function showNav() {
    if (list.style.maxHeight == "0px") {
        list.style.maxHeight = "150px"
    } else {
        list.style.maxHeight = "0px"
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Periodically change the background colour of the supp nav bar
 * Note: lower/upper colour bound should be set appropriately,
 *       such that the lowerB < upperB.
 */
function dynamicNavBarColour() {
    var colGradHex = 0;
    var colGradHex2 = 0;

    if (colGrad_lowerB > colGrad_upperB || colGrad2_lowerB > colGrad2_upperB )
         console.error("gradient bounds invalid")

    setTimeout(function() {
        colGrad = Math.floor(colGrad_lowerB + (inc_upper));
        colGrad2 = Math.floor(colGrad2_lowerB + (inc_lower));

        inc_upper++;
        inc_lower+=5;

        if (colGrad >= colGrad_upperB ) {
            inc_upper = 0;
        }

        if (colGrad >= colGrad_upperB ) {
            inc_lower = 0;
        }

        colGradHex = "#"+Number(colGrad).toString(16)
        colGradHex2 = "#"+Number(colGrad2).toString(16)

        document.getElementsByClassName("links")[0].style.background =
            'linear-gradient(to left,' + colGradHex2 + ', ' + colGradHex + ')';

        if (inc_upper >= 10) {
            inc_upper = 0;
        }
        dynamicNavBarColour();
    }, 100)
}

/* Tracks and updates the buddy cursor in real-time
 * This serves no actual purpose, just added it for fun
 *
 * TODO: For this to work with default cursor disabled, lots of z indexes
 * need to be changes for that it can work on the foreground
 * whilst being clickable.
 */
function cursor_track() {
    var cursor = document.getElementById("buddy-cursor");
    /* Register on mouse move callback */
    document.onmousemove = function(e) {
        cursor.style.display = "block";
        cursor.style.left = (e.pageX - 15) + "px";
        cursor.style.top = (e.pageY - 15) + "px";

        cursor.style.backgroundColor = 'rgb(' + cursor_r + ','
        + cursor_g + ','
        + cursor_b + ')';
    }
}

/* This function returns a `random` number between min. max
 * Function has been referenced here:
 * https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
 */
function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

/* Async function to change the cursor colour setting variables
 * These values are then used to update the `buddy-cursor` colours.
 */
function cursor_change() {
  cursor_r = randomIntFromInterval(100, 255);
  cursor_g = randomIntFromInterval(0, 75);
  cursor_b = randomIntFromInterval(100, 255);
  setTimeout(cursor_change, 300);
}

/* Init */
dynamicNavBarColour();
cursor_track();
cursor_change();