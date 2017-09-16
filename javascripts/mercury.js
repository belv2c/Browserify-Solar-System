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