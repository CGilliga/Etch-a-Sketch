const board = document.getElementById("etchy");
let size = 16;

for (let i = 0; i < size; i++) {
  let row = document.createElement("div");
  board.appendChild(row);

  for (let i = 0; i < size; i++) {
    let div = document.createElement("div");
    div.classList.add("boardPiece");
    div.addEventListener("mouseover", function (e) {
      e.target.style.background = "grey";
    });

    row.appendChild(div);
  }
}


let divs = document.getElementsByClassName("boardPiece");
let divs32 = document.getElementsByClassName("boardPiece32");
let divs48 = document.getElementsByClassName("boardPiece48");

let eraserMode = false;
let randomMode = false;
let colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

//ERASER BUTTON
const eraser = document.getElementsByClassName("eraser");
eraser[0].addEventListener("click", function (e) {
  if (eraserMode == false) {
    eraserMode = true;
    randomMode = false;
    e.target.style.background = "paleturquoise";
    random[0].style.background = "aliceblue";
    //clear and resize button colour change
  } else {
    eraserMode = false;
    e.target.style.background = "aliceblue";
  }
  eraserButton();
});
function eraserButton() {
  if (eraserMode == true) {
	if (size == 16) {
	    for (let i = 0; i < divs.length; i++) {
      	        divs[i].addEventListener("mouseover", function (e) {
        	e.target.style.background = "lightgrey";
      		});
    	}
	}

	if (size == 32) {
	    for (let i = 0; i < divs32.length; i++) {
      	        divs32[i].addEventListener("mouseover", function (e) {
        	e.target.style.background = "lightgrey";
      		});
    	}
	}

	if (size == 48) {
	    for (let i = 0; i < divs48.length; i++) {
      	        divs48[i].addEventListener("mouseover", function (e) {
        	e.target.style.background = "lightgrey";
      		});
    	}
	}

  } else {
    for (let i = 0; i < divs.length; i++) {
      divs[i].addEventListener("mouseover", function (e) {
        e.target.style.background = "grey";
      });
    }
	for (let i = 0; i < divs32.length; i++) {
      divs32[i].addEventListener("mouseover", function (e) {
        e.target.style.background = "grey";
      });
    }

	for (let i = 0; i < divs48.length; i++) {
      divs48[i].addEventListener("mouseover", function (e) {
        e.target.style.background = "grey";
      });
    }
  }
}

//RANDOM BUTTON
const random = document.getElementsByClassName("random");
random[0].addEventListener("click", function (e) {
  if (randomMode == false) {
    randomMode = true;
    eraserMode = false;
    e.target.style.background = "paleturquoise";
    eraser[0].style.background = "aliceblue";
    //clear and resize button colour change
  } else {
    randomMode = false;
    e.target.style.background = "aliceblue";
  }
  randomButton();
});
function randomButton() {
  if (randomMode == true) {
    for (let i = 0; i < divs.length; i++) {
      divs[i].addEventListener("mouseover", function (e) {
        e.target.style.background = randomCol();
      });
    }
     for (let i = 0; i < divs32.length; i++) {
      divs32[i].addEventListener("mouseover", function (e) {
        e.target.style.background = randomCol();
      });
    }
     for (let i = 0; i < divs48.length; i++) {
      divs48[i].addEventListener("mouseover", function (e) {
        e.target.style.background = randomCol();
      });
    }
  } else {
    for (let i = 0; i < divs.length; i++) {
      divs[i].addEventListener("mouseover", function (e) {
        e.target.style.background = "grey";
      });
    }
    for (let i = 0; i < divs32.length; i++) {
      divs32[i].addEventListener("mouseover", function (e) {
        e.target.style.background = "grey";
      });
    }
    for (let i = 0; i < divs48.length; i++) {
      divs48[i].addEventListener("mouseover", function (e) {
        e.target.style.background = "grey";
      });
    }
  }
}

function randomCol() {
  let rand = Math.floor(Math.random() * 8);
  return colours[rand];
}

//CLEAR BUTTON
const clear = document.getElementsByClassName("clear");
if (clear) {
  clear[0].addEventListener("click", function () {
    Array.prototype.forEach.call(
      document.getElementsByClassName("boardPiece"),
      function (element) {
        let pieces = document.getElementsByClassName("boardPiece");
        element.style.background = "lightgrey";
      }
    );
  });
}

if (clear) {
  clear[0].addEventListener("click", function () {
    Array.prototype.forEach.call(
      document.getElementsByClassName("boardPiece32"),
      function (element) {
        let pieces = document.getElementsByClassName("boardPiece32");
        element.style.background = "lightgrey";
      }
    );
  });
}

if (clear) {
  clear[0].addEventListener("click", function () {
    Array.prototype.forEach.call(
      document.getElementsByClassName("boardPiece48"),
      function (element) {
        let pieces = document.getElementsByClassName("boardPiece48");
        element.style.background = "lightgrey";
      }
    );
  });
}

//RESIZE BUTTON
let resize = document.getElementsByClassName("resize");
resize[0].addEventListener("click", function () {
      //remove boardPieces
      while (board.firstChild) {
        board.removeChild(board.firstChild);
      }
       
			switch (size) {
  case 16:
   console.log("hello16");
   
   for (let i = 0; i < 32; i++) {
        let row = document.createElement("div");
        board.appendChild(row);

        for (let i = 0; i < 32; i++) {
          let div = document.createElement("div");
          div.classList.add("boardPiece32");
          div.addEventListener("mouseover", function (e) {
            e.target.style.background = "grey";
          });
          row.appendChild(div);
        }
    		}
   
    size = 32;
    break;
  case 32:
    console.log("hello32");
      for (let i = 0; i < 48; i++) {
        let row = document.createElement("div");
        board.appendChild(row);

        for (let i = 0; i < 48; i++) {
          let div = document.createElement("div");
          div.classList.add("boardPiece48");
          div.addEventListener("mouseover", function (e) {
            e.target.style.background = "grey";
          });
          row.appendChild(div);
        }
    		}
    
    size = 48;
    break;
  case 48:
  console.log("hello48");
   for (let i = 0; i < 16; i++) {
        let row = document.createElement("div");
        board.appendChild(row);

        for (let i = 0; i < 16; i++) {
          let div = document.createElement("div");
          div.classList.add("boardPiece");
          div.addEventListener("mouseover", function (e) {
            e.target.style.background = "grey";
          });
          row.appendChild(div);
        }
    		}
    size = 16;
    break;
}

    });
