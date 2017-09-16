"use strict";

let planetContainer = document.getElementById("planets-output");
let jupiterContainer = document.getElementById("jupiter-output");
let marsContainer = document.getElementById("mars-output");
let mercuryContainer = document.getElementById("mercury-output");
let neptuneContainer = document.getElementById("neptune-output");
let saturnContainer = document.getElementById("saturn-output");
let uranusContainer = document.getElementById("uranus-output");
let venusContainer = document.getElementById("venus-output");

const earth = require('./earth');
const jupiter = require('./jupiter');
const mars = require('./mars');
const mercury = require('./mercury');
const neptune = require('./neptune');
const saturn = require('./saturn');
const uranus = require('./uranus');
const venus = require('./venus');

earth(planetContainer);
jupiter(jupiterContainer);
mars(marsContainer);
mercury(mercuryContainer);
neptune(neptuneContainer);
saturn(saturnContainer);
uranus(uranusContainer);
venus(venusContainer);

const planetGenerator = {
	earth, jupiter, mars, mercury, neptune, saturn, uranus, venus
};



module.exports = planetGenerator;