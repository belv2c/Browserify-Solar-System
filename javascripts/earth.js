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


function outputTo(domElement) {
	domElement.innerHTML += '<div id="earthStuff">';
	for(let key in earthStuff){
		domElement.innerHTML += `<p> $${earthStuff[key]}</p>`;
	}
		domElement.innerHTML += '</div>';
}

module.exports = outputTo;