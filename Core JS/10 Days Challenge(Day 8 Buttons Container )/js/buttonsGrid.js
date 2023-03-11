// let btn5 = document.getElementById("btn5");

// function rotateClockwise() {
//   let btn1 = document.getElementById("btn1");
//   let btn2 = document.getElementById("btn2");
//   let btn3 = document.getElementById("btn3");
//   let btn4 = document.getElementById("btn4");
//   let btn6 = document.getElementById("btn6");
//   let btn7 = document.getElementById("btn7");
//   let btn8 = document.getElementById("btn8");
//   let btn9 = document.getElementById("btn9");

//   let first = btn2.innerText;
//   btn2.innerText = btn1.innerText;
//   let second = btn3.innerText;
//   btn3.innerText = first;

//   first = btn6.innerText;
//   btn6.innerText = second;
//   second = btn9.innerText;
//   btn9.innerText = first;

//   first = btn8.innerText;
//   btn8.innerText = second;
//   second = btn7.innerText;
//   btn7.innerText = first;

//   first = btn4.innerText;
//   btn4.innerText = second;
//   second = btn1.innerText;
//   btn1.innerText = first;
// }

// btn5.addEventListener("click", rotateClockwise);

// Optimised way would be to shift array elements and iterate on each btns
let gridValues = [1, 2, 3, 6, 9, 8, 7, 4];
const ids = [1, 2, 3, 6, 9, 8, 7, 4];

let btn5 = document.getElementById("btn5");

function rotateClockwise() {
  gridValues.unshift(gridValues.pop());
  for (i = 0; i < ids.length; i++) {
    document.getElementById("btn" + ids[i]).innerHTML = gridValues[i];
  }
}

btn5.addEventListener("click", rotateClockwise);
