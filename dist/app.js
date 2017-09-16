(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let earthStuff = {
	Name: "Earth",
	Discovered: "2017 years ago",
	Mass: "5.972 x 10^24 kg",
	Diameter: "7,926 miles",
	Distance: "92.96 million miles",
	Atmosphere: "78% Nitrogen, 21% Oxygen, 1% Argon",
	Satellites: "Moon",
	Explorers: "Matt Damon"
};


const outputPlanetEarth = (earthString) => {
	earthString.innerHTML += `<div id="planetDiv">`;
	for(let key in earthStuff){
		earthString.innerHTML += `<p>${key}: ${earthStuff[key]}</p>`;
	}
	earthString.innerHTML += `</div>`;
};

module.exports = outputPlanetEarth;
},{}],2:[function(require,module,exports){
"use strict";

let jupiterStuff = {
	Name: "Jupiter",
	Discovered: "1610 by Galileo",
	Mass: "1.8986 × 1027 kg",
	Diameter: "139,822 km",
	Distance: "778.5 million km",
	Atmosphere: "Hydrogen, Helium",
	Satellites: "53 confirmed",
	Explorers: "Pioneer, Voyager, Galileo, Ulysses, Cassini"
};

const outputPlanetJupiter = (jupiterString) => {
	jupiterString.innerHTML += `<div id="planetDiv">`;
	for(let key in jupiterStuff){
		jupiterString.innerHTML += `<p>${key}: ${jupiterStuff[key]}</p>`;
	}
	jupiterString.innerHTML += `</div>`;
};

module.exports = outputPlanetJupiter;
},{}],3:[function(require,module,exports){
"use strict";

console.log("main.js");

const PlanetGenerator = require('./planetGenerator');


/*document.getElementById('buttons').addEventListener('click', (event) => {
	let planetSelected;
	if (event.target.id === 'buttons'){
		planetSelected = 'earthStuff';
	} else {
		planetSelected = event.target.id;
	}
	document.getElementById("planets-output").innerHTML = PlanetGenerator[planetSelected]();
});*/

},{"./planetGenerator":7}],4:[function(require,module,exports){
"use strict";

let marsStuff = {
	Name: "Mars",
	Discovered: "1659",
	Mass: "6.39 x 10^23 kg",
	Diameter: "4,212 miles",
	Distance: "141.6 million miles",
	Atmosphere: "95.32% Carbon Dioxide, 2.7% Nitrogen, 1.6% Argon, 0.13% Carbon Monoxide",
	Satellites: "Phobos and Deimos",
	Explorers: "Matt Damon"
};

const outputPlanetMars = (marsString) => {
	marsString.innerHTML += `<div id="planetDiv" class="planet-div">`;
	for(let key in marsStuff){
		marsString.innerHTML += `<p>${key}: ${marsStuff[key]}</p>`;
	}
	marsString.innerHTML += `</div>`;
};



module.exports = outputPlanetMars;
},{}],5:[function(require,module,exports){
"use strict";

let mercuryStuff = {
	Name: "Mercury",
	Discovered: "~3,000 B.C.",
	Mass: "3.285 × 10^23 kg",
	Diameter: "3,031 miles",
	Distance: "35.98 million miles",
	Atmosphere: "Small amounts of hydrogen, helium, and oxygen",
	Satellites: "No natural satellites ",
	Explorers: "United States' Mariner 10"
};

const outputPlanetMercury = (mercuryString) => {
	mercuryString.innerHTML += `<div id="planetDiv" class="planet-div">`;
	for(let key in mercuryStuff){
		mercuryString.innerHTML += `<p>${key}: ${mercuryStuff[key]}</p>`;
	}
	mercuryString.innerHTML += `</div>`;
};



module.exports = outputPlanetMercury;
},{}],6:[function(require,module,exports){
"use strict";


const neptuneStuff = {
	Name: "Neptune",
	Discovered: "1846",
	Mass: "1.0243×1026 kg",
	Diameter: "49,244 km",
	Distance: "4.5 billion kilometers",
	Atmosphere: "Hydrogen and helium, with trace amounts of methane, and water",
	Satellites: "13 known moons, Triton being the largest",
	Explorers: "Voyager 2"
};

const outputPlanetNeptune = (neptuneString) => {
	neptuneString.innerHTML += `<div id="planetDiv" class="planet-div">`;
	for(let key in neptuneStuff){
		neptuneString.innerHTML += `<p>${key}: ${neptuneStuff[key]}</p>`;
	}
	neptuneString.innerHTML += `</div>`;
};

module.exports = outputPlanetNeptune;
},{}],7:[function(require,module,exports){
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
},{"./earth":1,"./jupiter":2,"./mars":4,"./mercury":5,"./neptune":6,"./saturn":8,"./uranus":9,"./venus":10}],8:[function(require,module,exports){
"use strict";

const saturnStuff = {
	Name: "Saturn",
	Discovered: "~700BCE",
	Mass: "5.683 × 10^26 kg",
	Diameter: "116,464 km",
	Distance: "1.429 billion km",
	Atmosphere: "96.3% molecular hydrogen and 3.25% helium by volume",
	Satellites: "62 confirmed",
	Explorers: "Pioneer 10 & 11, Voyager 1 & 2, Galileo, Ulysses, Cassini, New Horizon, Juno"
};

const outputPlanetSaturn = (saturnString) => {
	saturnString.innerHTML += `<div id="planetDiv" class="planet-div">`;
	for(let key in saturnStuff){
		saturnString.innerHTML += `<p>${key}: ${saturnStuff[key]}</p>`;
	}
	saturnString.innerHTML += `</div>`;
};

module.exports = outputPlanetSaturn;
},{}],9:[function(require,module,exports){
"use strict";

const uranusStuff = {
	Name: "Uranus",
	Discovered: "1781",
	Mass: "(8.6810±0.0013)×1025 kg",
	Diameter: "50,724 km",
	Distance: "2.871 billion km",
	Atmosphere: "Molecular hydrogen: 82.5%, Helium: 15.2%, Methane: 2.3%",
	Satellites: "27 Known Satellites",
	Explorers: "Voyager 2"
};

const outputPlanetUranus = (uranusString) => {
	uranusString.innerHTML += `<div id="planetDiv">`;
	for(let key in uranusStuff){
		uranusString.innerHTML += `<p>${key}: ${uranusStuff[key]}</p>`;
	}
	uranusString.innerHTML += `</div>`;
};

module.exports = outputPlanetUranus;
},{}],10:[function(require,module,exports){
"use strict";

const venusStuff = {
	Name: "Venus",
	Discovered: "Since Venus is so bright and noticable in the sky, it was probably seen by the first groups of humans",
	Mass: "4.867 × 10^24 kg ",
	Diameter: "7,521 miles",
	Distance: "67.689 million miles ",
	Atmosphere: "primarily of carbon dioxide ",
	Satellites: "No natural satellites",
	Explorers: "United States' Mariner 10, Russian Venera 9"
};

const outputPlanetVenus = (venusString) => {
	venusString.innerHTML += `<div id="planetDiv" class="planet-div">`;
	for(let key in venusStuff){
		venusString.innerHTML += `<p>${key}: ${venusStuff[key]}</p>`;
	}
	venusString.innerHTML += `</div>`;
};


module.exports = outputPlanetVenus;
},{}]},{},[3]);
