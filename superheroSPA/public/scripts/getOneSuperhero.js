'use strict';

(function () {
    let resultarea;
    let messagearea;
    let heroID;

    document.addEventListener('DOMContentLoaded', init);

    function init() {
        resultarea = document.getElementById('resultarea');
        heroID = document.getElementById('heroID');
        messagearea = document.getElementById('messagearea');
        document.getElementById('submit')
            .addEventListener('click', send);
    }

    async function send() {
        clearMessage();
        resultarea.innerHTML = '';
        try {
            if (heroID.value.trim().length > 0) {
                const data =
                    await fetch(`http://localhost:4000/api/superheros/${heroID.value}`,
                        {
                            mode: 'cors',

                        });

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
        catch (error) {
            updateMessage(`Not found. ${error.message}`, 'error')
        }
    };

    function updateMessage(message, type) {
        messagearea.textContent = message;
        messagearea.setAttribute('class', type);
    }

    function clearMessage() {
        messagearea.textContent = '';
        messagearea.removeAttribute('class');
    }

    function updateSuperhero(result) {
        if (result.length === 0) return;
        console.log(result[0]);
        const superhero = result[0];
        resultarea.innerHTML = `
        <p><span class="legend">Hero Id</span> ${superhero.heroID}</p>
        <p><span class="legend">Name</span> ${superhero.name}</p>
        <p><span class="legend">Strength</span> ${superhero.strength}</p>
        <p><span class="legend">Costume</span> ${superhero.costume}</p>
        <p><span class="legend">Year of Birth</span> ${superhero.yearOfBirth}</p>
        `
    }


})();