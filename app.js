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
var answer = "";
var foundMatch = false;

var musicalActs = ["apollo100", "beethoven", "mozart"];

var startGame = function (guess) {
	var choice = Math.floor(Math.random() * musicalActs.length);
	var answer = musicalActs[choice];
	// console.log(answer, "computer guess");
	checkGuess(answer);

	var letters = Array.from(answer);
	// console.log("letters", letters);
	var blanksNum = answer.length;
	// console.log(blanksNum, "blanksNum");
	displayLetters();

	function displayLetters() {
		var blanks = [];
		for (let i = 0; i < answer.length; i++) {
			blanks.push("_");
			guessWord.innerHTML = blanks.join(" ");
			console.log(blanks, "blanks");
		}
	}
};
function checkGuess(guess, answer) {
	console.log(answer, "this is scope");

	var foundMatch = false;
	for (var i = 0; i < answer.length; i++) {
		if (guess === answer[i]) {
			foundMatch = true;
			blanks[i] = guess;
			console.log(guess);
			console.log(letters[i], "valhalla");
			displayLetters();
		}
	}
}

// function checkGuess(guess) {
// 	console.log(guess, "userGuess");
// }

window.onload = function () {
	document.onkeyup = function (event) {
		const userGuess = event.key;
		// displayLetters();
		// displayLetters(userGuess);
		checkGuess(userGuess);
	};
	startGame();
};
