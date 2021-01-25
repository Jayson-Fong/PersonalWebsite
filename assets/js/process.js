/* Invitation Code Processing
 * Opens a new window depending on user input.
 * Room for Improvement: Processing Server to Prevent Snooping
 */
'use strict';

// Open & Close the Collapsibles
function toggleCollapsible(element) {
    var collapsible = document.getElementById(element.getAttribute('data-collapsible-id'));
    collapsible.hidden = !collapsible.hidden;
    var carets = (element.getElementsByClassName('collapsible-button')[0b0]).getElementsByTagName('i');
    // Hide the First Caret Down
    hideElement(carets[0b0], !collapsible.hidden);
    // Hide the First Caret Up
    hideElement(carets[0b1], collapsible.hidden);
}

// Hides (Almost) Any Element
function hideElement(element, show) {
    if (show) {
        element.style.display = 'inline';
        element.hidden = false;
    } else {
        element.style.display = 'none';
        element.hidden = true;
    }
}

var collapsibleButtons = document.getElementsByClassName('collapsible-button-link');
Array.prototype.forEach.call(collapsibleButtons, function(element) {
    toggleCollapsible(element);
    element.addEventListener('click', function(event) {
        toggleCollapsible(element);
    });
});

document.getElementById('copyright-year').innerHTML = new Date().getFullYear();