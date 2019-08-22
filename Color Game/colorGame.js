// Initialize variables
var numSquares = 3;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var banner = document.getElementById("banner");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var modeButtons = document.querySelectorAll(".mode");

// Setup web page
init();

// Init components
function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

// Setup amount of squares and styling
function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			// Remove all previous selected class attributes
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			this.classList.add("selected");
			// Switch case to find which mode the user clicks on
			switch(this.textContent) {
				case "Easy":
					numSquares = 3;
					break;
				case "Hard":
					numSquares = 6;
					break;
				case "Extra Hard":
					numSquares = 12;
					break;
			}
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	// Add click listeners to squares
		squares[i].addEventListener("click", function(){
			// Store color of clicked squares
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	banner.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	// Change square colors
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "mediumaquamarine";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	//pick a RGB from 0 - 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

