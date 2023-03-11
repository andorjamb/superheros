'use strict';

(function () {

    let heroIDField;
    let nameField;
    let strengthField;
    let costumeField;
    let yearOfBirthField;
    let messagearea;

    document.addEventListener('DOMContentLoaded', init);

    function init() {
        heroIDField = document.getElementById('heroID');
        nameField = document.getElementById('name');
        strengthField = document.getElementById('strength');
        costumeField = document.getElementById('costume');
        yearOfBirthField = document.getElementById('yearOfBirth');
        messagearea = document.getElementById('messagearea');

        document.getElementById('submit').addEventListener('click', send);
    }

    async function send() {
        clearMessage();
        const superhero = {
            heroID: +heroIDField.value,
            name: nameField.value,
            strength: strengthField.value,
            costume: costumeField.value,
            yearOfBirth: +yearOfBirthField.value
        }

        try {
            const options = {
                method: 'POST',
                body: JSON.stringify(superhero),
                headers: {
                    'Content-type': 'application/json'
                },
                mode: 'cors'
            }

            const data = await fetch('http://localhost:4000/api/superheros', options);
            const status = await data.json();

            if (status.message) {
                updateMessage(status.message, status.type);
            }

        }
        catch (error) {
            updateMessage(error.message, 'error');
        }
    }

    function updateMessage(message, type) {
        messagearea.textContent = message;
        messagearea.setAttribute('class', type);
    }

    function clearMessage() {
        messagearea.textContent = '';
        messagearea.removeAttribute('class');
    }

})();