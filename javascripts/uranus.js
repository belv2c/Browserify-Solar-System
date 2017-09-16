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