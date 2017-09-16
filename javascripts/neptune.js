"use strict";


const neptuneStuff = {
	Name: "Neptune",
	Discovered: "1846",
	Mass: "1.0243×1026 kg",
	Diameter: "49,244 km",
	Distance: "4.5 billion kilometers",
	Atmosphere: "Hydrogen and helium, with trace amounts of methane, water, ammonia and other ices",
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