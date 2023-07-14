var randomnumber1 = Math.floor(Math.random() * 6) + 1;

var randomimage = "dice" + randomnumber1 + ".png";

var randomimagesrc = "./images/" + randomimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimagesrc);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomimage = "dice" + randomnumber2 + ".png";

var randomimagesrc = "./images/" + randomimage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomimagesrc);

const reloadButton = document.getElementById("btn");

if (randomnumber1 == randomnumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomnumber1 < randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

document.querySelector("form").addEventListener("button", () => {
  if (randomnumber1 == randomnumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  }
});
