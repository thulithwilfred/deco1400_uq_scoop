/* Mobile Animations */
var list = document.getElementById("navMenu-list");
list.style.maxHeight = "0px";

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

/**
 * Function to load in repeated HTML for the navigation menu.
 */
function loadNavHTML() {
  $("#nav-placeholder").load("../nav_menu.html")
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Periodically change the background colour of the supp nav bar
 * Note: lower/upper colour bound should be set appropriately,
 *       such that the lowerB < upperB.
 */
var colGrad_lowerB = 0x552586;
var colGrad_upperB = 0xB589D6;
var inc_upper = 0;
var inc_lower = 0;
var colGrad2_lowerB = 0x7f7196;
var colGrad2_upperB = 0xbfb8ca;
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

/* Init */
dynamicNavBarColour();
