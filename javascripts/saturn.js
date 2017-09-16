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