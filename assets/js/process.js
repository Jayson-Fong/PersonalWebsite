/* Invitation Code Processing
 * Opens a new window depending on user input.
 * Room for Improvement: Processing Server to Prevent Snooping
 */
'use strict';

function toggleCollapsible(element) {
    var collapsible = document.getElementById(element.getAttribute('data-collapsible-id'));
    collapsible.hidden = !collapsible.hidden;
    var carets = (element.getElementsByClassName('collapsible-button')[0b0]).getElementsByTagName('i');
    hideElement(carets[0b0], !collapsible.hidden);
    hideElement(carets[0b1], collapsible.hidden);
}

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