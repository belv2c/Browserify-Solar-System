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


const outputPlanetEarth = () => {
	let earthString = "";
	console.log("earthstuff");
	for(let key in earthStuff){
	earthString += `<div id="earthStuff">`;
	earthString.innerHTML += `<p> $${earthStuff[key]}</p>`;
	earthString.innerHTML += `</div>`;
	}
	
	return earthString;
};

module.exports = outputPlanetEarth;