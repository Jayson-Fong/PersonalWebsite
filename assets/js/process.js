/* Invitation Code Processing
 * Opens a new window depending on user input.
 * Room for Improvement: Processing Server to Prevent Snooping
 */
'use strict';

function processInvitation(invitationCode) {
    switch (invitationCode) {
    case 'CST-0A1': 
        window.open('https://forms.office.com/Pages/ResponsePage.aspx?id=-VzmfS4_Z06kaZZbDQhfuzsjwJ6dgCNKqEQN6AcZFihUMFhBUlBUVVFCMUJMVVVYOEdDVzUxUTBVRS4u', '_blank');
        break;
    }
}

function onPageLoad() {
    var invitationCode = (new URLSearchParams(window.location.search)).get('invitation');
    document.getElementById('invitation').value = invitationCode;
    processInvitation(invitationCode);
}

function onInvitationInput() {
    processInvitation(document.getElementById('invitation').value);
}

function onKeyUp(event) {
    if (event.keyCode === 0b1101) {
        onInvitationInput();
    }
}

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

window.onload = onPageLoad;
document.getElementById('invitation').addEventListener('input', onInvitationInput);
document.getElementById('invitation').addEventListener('keyup', function(event) {
    onKeyUp(event);
});

var collapsibleButtons = document.getElementsByClassName('collapsible-button-link');
Array.prototype.forEach.call(collapsibleButtons, function(element) {
    toggleCollapsible(element);
    element.addEventListener('click', function(event) {
        toggleCollapsible(element);
    });
});