const board = document.getElementById("etchy");

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

let divs = document.getElementsByClassName("boardPiece");
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
    for (let i = 0; i < divs.length; i++) {
      divs[i].addEventListener("mouseover", function (e) {
        e.target.style.background = "lightgrey";
      });
    }
  } else {
    for (let i = 0; i < divs.length; i++) {
      divs[i].addEventListener("mouseover", function (e) {
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
  } else {
    for (let i = 0; i < divs.length; i++) {
      divs[i].addEventListener("mouseover", function (e) {
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
