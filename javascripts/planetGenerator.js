"use strict";

let planetContainer = document.getElementById("planets-output");

const earth = require('./earth');
const jupiter = require('./jupiter');
const mars = require('./mars');
const mercury = require('./mercury');
const neptune = require('./neptune');
const saturn = require('./saturn');
const uranus = require('./uranus');
const venus = require('./venus');

earth(planetContainer);
jupiter(planetContainer);
mars(planetContainer);
mercury(planetContainer);
neptune(planetContainer);
saturn(planetContainer);
uranus(planetContainer);
venus(planetContainer);

const planetGenerator = {
	earth, jupiter, mars, mercury, neptune, saturn, uranus, venus
};



module.exports = planetGenerator;