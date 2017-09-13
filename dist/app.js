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
	Satelites: "Need",
	Explorers: "Lots"
};

console.log("earth stuff", earthStuff);



module.exports = earthStuff;
},{}],3:[function(require,module,exports){
"use strict";

const jupiterStuff = {
	Name: "Jupiter",
	Discovered: "",
	Mass: "",
	Diameter: "",
	Distance: "",
	Atmosphere: "",
	Satelites: "",
	Explorers: ""
};



module.exports = jupiterStuff;
},{}],4:[function(require,module,exports){
"use strict";

console.log("main.js");

const PlanetGenerator = require('./PlanetGenerator');



},{"./PlanetGenerator":1}],5:[function(require,module,exports){
"use strict";

const marsStuff = {
	Name: "Mars",
	Discovered: "",
	Mass: "",
	Diameter: "",
	Distance: "",
	Atmosphere: "",
	Satelites: "",
	Explorers: ""
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
	Satelites: "",
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
	Satelites: "",
	Explorers: ""
};



module.exports = neptuneStuff;
},{}],8:[function(require,module,exports){
"use strict";

const saturnStuff = {
	Name: "Saturn",
	Discovered: "",
	Mass: "",
	Diameter: "",
	Distance: "",
	Atmosphere: "",
	Satelites: "",
	Explorers: ""
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
	Satelites: "",
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
	Satelites: "",
	Explorers: ""
};



module.exports = venusStuff;
},{}]},{},[4]);
