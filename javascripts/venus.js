"use strict";

const venusStuff = {
	Name: "Venus",
	Discovered: "A long, long time ago",
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