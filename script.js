const board = document.getElementById('etchy');

for (let i = 0; i < 16; i++){
	let row = document.createElement('div');
	board.appendChild(row);

	for (let i = 0; i < 16; i++){
	let div = document.createElement('div');
	div.classList.add('boardPiece'); 
 	div.addEventListener('mouseover', function (e) {
    	e.target.style.background = 'grey';
	});

	row.appendChild(div);
	}
}
	
let divs = document.getElementsByClassName("boardPiece");
let eraserMode = false;
let randomMode = false;
let colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];


// need an event listener not a conditional

const random = document.getElementsByClassName('random');
random[0].addEventListener('click', function (e) {
		if (randomMode == false){
		randomMode = true;
		e.target.style.background = "paleturquoise"
		} else {
		randomMode = false;
		e.target.style.background = "lightgrey"
		}
		randomButton();
});
function randomButton() {
	if (randomMode == true) {
		for (let i = 0; i < divs.length; i++) {
    		divs[i].addEventListener('mouseover', function (e) {
    		e.target.style.background = randomCol();
		});
		}
   	} else {
		for (let i = 0; i < divs.length; i++) {
    		divs[i].addEventListener('mouseover', function (e) {
    		e.target.style.background = "grey";
		});
		}
	}
}



/*
if (randomMode == true){
	for (let i = 0; i < divs.length; i++) {
    	divs[i].addEventListener('mouseover', function (e) {
    	e.target.style.background = randomCol();
	});
}
} */ 

//ERASER BUTTON
const eraser = document.getElementsByClassName('eraser');
eraser[0].addEventListener('click', function (e) {
		if (eraserMode == false){
		eraserMode = true;
		e.target.style.background = "paleturquoise"
		} else {
		eraserMode = false;
		e.target.style.background = "lightgrey"
		}
		eraserButton();
});
function eraserButton() {
	if (eraserMode == true) {
		for (let i = 0; i < divs.length; i++) {
    		divs[i].addEventListener('mouseover', function (e) {
    		e.target.style.background = "white";
		});
		}
   	} else {
		for (let i = 0; i < divs.length; i++) {
    		divs[i].addEventListener('mouseover', function (e) {
    		e.target.style.background = "grey";
		});
		}
	}
}


function randomCol() {
    let rand = Math.floor(Math.random() * 8);
	return colours[rand];
}





