let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let counter = document.querySelector(".counter");
let reset = document.querySelector(".reset");

function plusOne() {
  if (Number(counter.innerHTML) >= 999999) {
    return;
  } else if (Number(counter.innerHTML) === 999998) {
    //Last increment. Adding the inactive class to the '+' button
    counter.innerHTML++;
    plus.classList.add("inactive");
    plus.setAttribute("disabled", "");
  } else {
    //If the value is 0, then the inactive class is removed form the '-' button
    minus.classList.remove("inactive");
    minus.removeAttribute("disabled", "");
    counter.innerHTML++;
  }
}

function minusOne() {
  if (Number(counter.innerHTML) <= 0) {
    return;
  } else if (Number(counter.innerHTML) === 1) {
    //Last decrement. Adding the inactive class to the '-' button
    counter.innerHTML--;
    minus.classList.add("inactive");
    minus.setAttribute("disabled", "");
  } else {
    //If the value is 999999, then the inactive class is removed form the '+' button
    plus.classList.remove("inactive");
    plus.removeAttribute("disabled", "");
    counter.innerHTML--;
  }
}

function resetCounter() {
  counter.innerHTML = 0;
  minus.classList.add("inactive");
  plus.classList.remove("inactive");
  minus.setAttribute("disabled", "");
  plus.removeAttribute("disabled", "");
}

//Plus one

//On click
plus.addEventListener("click", plusOne);

//On press of the '+' key or the '->' key
document.addEventListener("keydown", (e) => {
  if (e.key === "+" || e.key === "ArrowRight") {
    plusOne();
  }
});

//Minus one

//On click
minus.addEventListener("click", minusOne);

//On press of the '-' key or the '<-' key
document.addEventListener("keydown", (e) => {
  if (e.key === "-" || e.key === "ArrowLeft") {
    minusOne();
  }
});

//Reset

//On click
reset.addEventListener("click", resetCounter);

//On press of the 'ArrowUp' or 'ArrowDown' key

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" || e.key === "ArrowDown") {
    resetCounter();
  }
});
