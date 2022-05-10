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