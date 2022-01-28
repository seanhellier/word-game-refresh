"use strict";

/*

Index.html:
    put html on index.html
    put instructions on page

App.js:
    declare musical acts array

    declare global variables

chooseFromArray  {

    generate a random num between 0 and array.length

    use generated number to extract an element from the array

    break the element into string or push into new array?
}
use string.length to create underscore blanks on page
setup event listeners

compareKeyToString {
    if keyUp matches letter of computer guess,
    put it in correct position on page
}
*/

var numTries = document.getElementById("numTries");
var numWins = document.getElementById("numWins");
var numLosses = document.getElementById("numLosses");
var guessesLeft = 10;
var blanksNum = 0;

var musicalActs = ["apollo100", "beethoven", "mozart"];

var startGame = function () {
	console.log("game start");
	var choice = Math.floor(Math.random() * musicalActs.length);
	console.log(choice);

	var answer = musicalActs[choice];
	console.log(answer);

	var letters = Array.from(answer);
	console.log("letters", letters);
	var blanksNum = answer.length;
	console.log(blanksNum, "blanksNum");
};

window.onload = function () {
	startGame();
};
