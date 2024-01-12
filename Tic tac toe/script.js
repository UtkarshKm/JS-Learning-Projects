let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true;
let winMsg = document.querySelector("#win-msg");

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const result = (player) => {
  winMsg.classList.remove("hide");
  winMsg.innerText = `Winner is player ${player}`;
  disableBox();
};
const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    winMsg.classList.add("hide");
  }
};

const checkWinner = () => {
  for (pattern of winPattern) {
    // console.log(pattern[0], pattern[1], pattern[2]); //gives the positon

    // console.log(
    //   // gives the value of that position
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos3 === pos2) {
        console.log("winner " + pos1);
        result(pos1);
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

resetBtn.addEventListener("click", () => {
  enableBox();
});
