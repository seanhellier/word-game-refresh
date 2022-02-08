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
var guessesLeft = 0;
var wins = 0;
var numLosses = 0;
var answer = "";
var foundMatch = false;
var resetText = "";
var numWins = 0;

var musicalActs = ["apollo100", "beethoven", "mozart"];

var startGame = function (guess) {
	guessesLeft = 10;
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
	var choice = Math.floor(Math.random() * musicalActs.length);
	var answer = musicalActs[choice];
	var blanks = [];
	console.log(answer);
	// guessesLeft = 10;
	// document.getElementById("guessesLeft").innerHTML = "guessesLeft";

	var letters = Array.from(answer);
	console.log(letters);
	var blanksNum = answer.length;
	// console.log(blanksNum, "blanksNum");
	createBlanks();

	function createBlanks() {
		for (let i = 0; i < answer.length; i++) {
			blanks.push("_");
			guessWord.innerHTML = blanks.join(" ");
			// console.log(blanks, "blanks");
		}

		//if correctLetter is in the answer, then we replce the blank index with this letter
	}

	function keepScore() {
		if (foundMatch) {
			console.log(foundMatch, "you found a match");
			guessesLeft--;
			document.getElementById("guessesLeft").innerHTML = guessesLeft;
			// console.log("You found a match");
			if (!blanks.includes("_")) {
				resetText = "You have won!";
				document.getElementById("resetText").innerHTML = resetText;
				numWins++;
				document.getElementById("numWins").innerHTML =
					"number of wins " + numWins;
			}
		} else {
			guessesLeft--;
			document.getElementById("guessesLeft").innerHTML = guessesLeft;
			if (guessesLeft === 0) {
				resetText = "you have lost!";
				document.getElementById("resetText").innerHTML = resetText;
				numLosses++;
				document.getElementById("numWins").innerHTML =
					"number of losses " + numLosses;
			}
		}
	}

	function checkGuess(guess) {
		let indexes = [];

		for (var i = 0; i < answer.length; i++) {
			if (guess === answer[i]) {
				indexes.push(i);
			}
		}

		//if there are matches
		if (indexes.length > 0) {
			for (let q = 0; q < indexes.length; q++) {
				blanks[indexes[q]] = guess;
				foundMatch = true;
			}
		}
		guessWord.innerHTML = blanks.join(" ");
	}

	window.onload = function () {
		document.onkeyup = function (event) {
			const userGuess = event.key;
			keepScore();
			checkGuess(userGuess);
		};
	};
};

startGame();
