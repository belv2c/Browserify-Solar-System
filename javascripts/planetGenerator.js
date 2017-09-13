"use strict";

const earth = require('./earth');
const jupiter = require('./jupiter');
const mars = require('./mars');
const mercury = require('./mercury');
const neptune = require('./neptune');
const saturn = require('./saturn');
const uranus = require('./uranus');
const venus = require('./venus');

const planetGenerator = {
	earth, jupiter, mars, mercury, neptune, saturn, uranus, venus
};

let planetEarth = document.getElementById("planets-output");

module.exports = planetGenerator;