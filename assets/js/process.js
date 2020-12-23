/* Invitation Code Processing
 * Opens a new window depending on user input.
 * Room for Improvement: Processing Server to Prevent Snooping
 */
window.onload = onPageLoad;
document.getElementById('invitation').addEventListener('input', onInvitationInput);
document.getElementById('invitation').addEventListener('keyup', function(event) {
    onKeyUp(event);
});

function onPageLoad() {
    const urlParams = new URLSearchParams(window.location.search);
    const invitationCode = urlParams.get('invitation');
    document.getElementById('invitation').value = invitationCode;
    processInvitation(invitationCode);
}

function onInvitationInput() {
    processInvitation(document.getElementById('invitation').value);
}

function onKeyUp(event) {
    if (event.keyCode === 13) onInvitationInput();
}

function processInvitation(invitationCode) {
    switch(invitationCode) {
        case 'CST-0A1': window.open('https://forms.office.com/Pages/ResponsePage.aspx?id=-VzmfS4_Z06kaZZbDQhfuzsjwJ6dgCNKqEQN6AcZFihUMFhBUlBUVVFCMUJMVVVYOEdDVzUxUTBVRS4u', '_blank');
    }
}