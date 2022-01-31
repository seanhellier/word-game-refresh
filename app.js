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
var guessWord = document.getElementById("guessWord");
var numTries = document.getElementById("numTries");
var numWins = document.getElementById("numWins");
var numLosses = document.getElementById("numLosses");

var gameActive = true;
var guessesLeft = 10;
var blanksNum = 0;

var musicalActs = ["apollo100", "beethoven", "mozart"];

var startGame = function () {
	var choice = Math.floor(Math.random() * musicalActs.length);
	var answer = musicalActs[choice];
	// console.log(answer, "word");

	var letters = Array.from(answer);
	console.log("letters", letters);
	var blanksNum = answer.length;
	// console.log(blanksNum, "blanksNum");
	CreateLetters();

	function CreateLetters() {
		var blanks = [];
		for (let i = 0; i < answer.length; i++) {
			blanks.push("_");
			guessWord.innerHTML = blanks.join(" ");
			console.log(blanks, "blanks");
		}

		// for (var i = 0; i < answer.length; i++) {
		//     // for the if/else statement, IF userLetter is in "answer" we want to replace the __ on the screen
		//     if (guess === answer[i]) {
		//         foundMatch = true;
		//         letters[i] = guess;
		//         displayLetters();

		//     }
	}
};

function displayLetters() {}

window.onload = function () {
	document.onkeyup = function (event) {
		const userGuess = event.key;
		console.log(userGuess, "userGuess");
		// displayLetters();
		displayLetters(userGuess);
	};
	startGame();
};
