'use strict';

const toInsertArray = superhero => [
    +superhero.heroID, superhero.name, superhero.strength,
    superhero.costume, +superhero.yearOfBirth
];

const toUpdateArray = superhero => [
    superhero.name, superhero.strength, superhero.costume,
    +superhero.yearOfBirth, +superhero.heroID
];

module.exports = { toInsertArray, toUpdateArray }