(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./earth":2,"./jupiter":3,"./mars":5,"./mercury":6,"./neptune":7,"./saturn":8,"./uranus":9,"./venus":10}],2:[function(require,module,exports){
"use strict";

const earthStuff = {
	Name: "Earth",
	Discovered: "2017 years ago",
	Mass: "5.972 x 10^24 kg",
	Diameter: "7,926 miles",
	Distance: "92.96 million miles",
	Atmosphere: "78% Nitrogen, 21% Oxygen, 1% Argon",
	Satellites: "Moon",
	Explorers: "Matt Damon"
};

console.log("earth stuff", earthStuff);



module.exports = earthStuff;
},{}],3:[function(require,module,exports){
"use strict";

const jupiterStuff = {
	Name: "Jupiter",
	Discovered: "1610 by Galileo",
	Mass: "1.8986 × 1027 kg",
	Diameter: "139,822 km",
	Distance: "778.5 million km",
	Atmosphere: "Hydrogen, Helium",
	Satellites: "53 confirmed",
	Explorers: "Pioneer 10 & 11, Voyager 1 & 2, Galileo, Ulysses, Cassini, New Horizon, Juno"
};

console.log("jupiter stuff", jupiterStuff);

module.exports = jupiterStuff;
},{}],4:[function(require,module,exports){
"use strict";

console.log("main.js");

const PlanetGenerator = require('./PlanetGenerator');



},{"./PlanetGenerator":1}],5:[function(require,module,exports){
"use strict";

const marsStuff = {
	Name: "Mars",
	Discovered: "1659",
	Mass: "6.39 x 10^23 kg",
	Diameter: "4,212 miles",
	Distance: "141.6 million miles",
	Atmosphere: "95.32% Carbon Dioxide, 2.7% Nitrogen, 1.6% Argon, 0.13% Carbon Monoxide",
	Satellites: "Phobos and Deimos",
	Explorers: "Matt Damon"
};



module.exports = marsStuff;
},{}],6:[function(require,module,exports){
"use strict";

const mercuryStuff = {
	Name: "Mercury",
	Discovered: "",
	Mass: "",
	Diameter: "",
	Distance: "",
	Atmosphere: "",
	Satellites: "",
	Explorers: ""
};



module.exports = mercuryStuff;
},{}],7:[function(require,module,exports){
"use strict";


const neptuneStuff = {
	Name: "Neptune",
	Discovered: "",
	Mass: "",
	Diameter: "",
	Distance: "",
	Atmosphere: "",
	Satellites: "",
	Explorers: ""
};



module.exports = neptuneStuff;
},{}],8:[function(require,module,exports){
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



module.exports = saturnStuff;
},{}],9:[function(require,module,exports){
"use strict";

const uranusStuff = {
	Name: "Uranus",
	Discovered: "",
	Mass: "",
	Diameter: "",
	Distance: "",
	Atmosphere: "",
	Satellites: "",
	Explorers: ""
};



module.exports = uranusStuff;
},{}],10:[function(require,module,exports){
"use strict";

const venusStuff = {
	Name: "Venus",
	Discovered: "",
	Mass: "",
	Diameter: "",
	Distance: "",
	Atmosphere: "",
	Satellites: "",
	Explorers: ""
};



module.exports = venusStuff;
},{}]},{},[4]);
