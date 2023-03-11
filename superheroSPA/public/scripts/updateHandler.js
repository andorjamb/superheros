'use strict';

(function () {
    let heroIDField;
    let nameField;
    let strengthField;
    let costumeField;
    let yearOfBirthField;
    let messagearea;
    let searchState = true;

    document.addEventListener('DOMContentLoaded', init);

    function init() {
        heroIDField = document.getElementById('heroID');
        nameField = document.getElementById('name');
        strengthField = document.getElementById('strength');
        costumeField = document.getElementById('costume');
        yearOfBirthField = document.getElementById('yearOfBirth');
        messagearea = document.getElementById('messagearea');


        updateFields();

        document.getElementById('submit')
            .addEventListener('click', send);

        heroIDField.addEventListener('focus', clearAll);
    }

    function updateMessage(message, type) {
        messagearea.textContent = message;
        messagearea.setAttribute('class', type);
    }

    function clearMessage() {
        messagearea.textContent = '';
        messagearea.removeAttribute('class');
    }

    function clearAll() {
        if (searchState) {
            clearFieldValues();
            clearMessage();
        }
    }

    function updateFields() {
        if (searchState) {
            heroIDField.removeAttribute('readonly');
            nameField.setAttribute('readonly', true);
            strengthField.setAttribute('readonly', true);
            costumeField.setAttribute('readonly', true);
            yearOfBirthField.setAttribute('readonly', true);
        }
        else {
            heroIDField.setAttribute('readonly', true);
            nameField.removeAttribute('readonly');
            strengthField.removeAttribute('readonly');
            costumeField.removeAttribute('readonly');
            yearOfBirthField.removeAttribute('readonly');
        }
    } //updateFields end

    function clearFieldValues() {
        heroIDField.value = '';
        nameField.value = '';
        strengthField.value = '';
        costumeField.value = '';
        yearOfBirthField.value = '';
        searchState = true;
        updateFields();
    } //end of clearFieldValues

    function updateSuperhero(result) {
        if (result.length === 0) return;
        const superhero = result[0];
        heroIDField.value = superhero.heroID;
        nameField.value = superhero.name;
        strengthField.value = superhero.strength;
        costumeField.value = superhero.costume;
        yearOfBirthField.value = superhero.yearOfBirth;
        searchState = false;
        updateFields();
    }

    async function send() {
        try {
            if (searchState) {
                if (heroIDField.value.trim().length > 0) {
                    const data =
                        await fetch(`http://localhost:4000/api/superheros/${heroIDField.value}`,
                            { mode: 'cors' });
                    const result = await data.json();
                    if (result) {
                        if (result.message) {
                            updateMessage(result.message, result.type);
                        }
                        else {
                            updateSuperhero(result);
                        }
                    }
                }
            }
            else {
                const superhero = {
                    heroID: heroIDField.value,
                    name: nameField.value,
                    strength: strengthField.value,
                    costume: costumeField.value,
                    yearOfBirth: yearOfBirthField.value
                };

                const options = {
                    method: 'PUT',
                    body: JSON.stringify(superhero),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors'
                }

                const data =
                    await fetch(`http://localhost:4000/api/superheros/${superhero.heroID}`,
                        options);

                const status = await data.json();

                if (status.message) {
                    updateMessage(status.message, status.type);
                }

                searchState = true;
                updateFields();
            }

        }
        catch (err) {
            updateMessage(err.message, 'error');
        }
    }

})();