'use strict';

(function () {

    document.addEventListener('DOMContentLoaded', init);

    async function init() {
        try {
            const data =
                await fetch('http://localhost:4000/api/superheros', { mode: 'cors' });
            const superheros = await data.json();

            const resultset = document.getElementById('resultset');
            
            for (const superhero of superheros) {
                const tr = document.createElement('tr');
                tr.appendChild(createCell(superhero.heroID));
                tr.appendChild(createCell(superhero.name));
                tr.appendChild(createCell(superhero.strength));
                tr.appendChild(createCell(superhero.costume));
                tr.appendChild(createCell(superhero.yearOfBirth));
                resultset.appendChild(tr);
            }
        }
        catch (error) {
            document.getElementById('messagearea').innerHTML = `
            <p class="error">${error.message}</p>`;
        }
    } //end of init

    function createCell(data) {
        const td = document.createElement('td');
        td.textContent = data;
        return td;
    }

})();