"use strict";

let marsStuff = {
	Name: "Mars",
	Discovered: "1659",
	Mass: "6.39 x 10^23 kg",
	Diameter: "4,212 miles",
	Distance: "141.6 million miles",
	Atmosphere: "95.32% Carbon Dioxide, 2.7% Nitrogen",
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