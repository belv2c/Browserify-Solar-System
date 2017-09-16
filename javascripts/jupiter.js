"use strict";

let jupiterStuff = {
	Name: "Jupiter",
	Discovered: "1610 by Galileo",
	Mass: "1.8986 × 1027 kg",
	Diameter: "139,822 km",
	Distance: "778.5 million km",
	Atmosphere: "Hydrogen, Helium",
	Satellites: "53 confirmed",
	Explorers: "Pioneer 10 & 11, Voyager 1 & 2, Galileo, Ulysses, Cassini, New Horizon, Juno"
};

const outputPlanetJupiter = (jupiterString) => {
	jupiterString.innerHTML += `<div id="planetDiv">`;
	for(let key in jupiterStuff){
		jupiterString.innerHTML += `<p>${key}: ${jupiterStuff[key]}</p>`;
	}
	jupiterString.innerHTML += `</div>`;
};

module.exports = outputPlanetJupiter;