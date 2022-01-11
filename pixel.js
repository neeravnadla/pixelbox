"use strict";

document.querySelector("body").addEventListener("load", pageLoad());

function pageLoad() {
  document.querySelectorAll(".in-numb").forEach((e) => {
    e.value = Math.floor(Math.random() * 21);
    e.addEventListener("input", generatePixelbox);
  });
  generatePixelbox();
}

function generatePixelbox() {
  let pixelOne = parseInt(document.querySelector("#pixel-1").value);
  let pixelTwo = parseInt(document.querySelector("#pixel-2").value);
  let oldBoxes = document.querySelectorAll(".smallbox");
  oldBoxes.forEach((e) => e.remove());
  if (isNaN(pixelOne) === true) pixelOne = 0;
  if (isNaN(pixelTwo) === true) pixelTwo = 0;
  if (pixelOne >= 0 && pixelTwo >= 0)
    newBoxes(perfectPixel(pixelOne + pixelTwo), pixelOne, pixelTwo);
}

function newBoxes(t, p1, p2) {
  let boxes = [];
  boxes.length = parseInt(t);
  boxes.fill(0);

  let i = 0;
  while (i < p1 + p2) {
    if (i < p1) boxes[i] = 1;
    else boxes[i] = 2;
    i++;
  }

  let shuffledboxes = shuffleArray(boxes);
  let boxsize = 250 / Math.sqrt(t);

  for (let i = 0; i < shuffledboxes.length; i++) {
    let div = document.createElement("div");
    div.className = "smallbox";
    div.style.width = boxsize + "px";
    div.style.height = boxsize + "px";
    document.querySelector(".pixelbox").appendChild(div);
    if (shuffledboxes[i] === 1) div.style.backgroundColor = "var(--p1-color)";
    if (shuffledboxes[i] === 2) div.style.backgroundColor = "var(--p2-color)";
  }
}

function perfectPixel(N) {
  if (Math.sqrt(N) - Math.floor(Math.sqrt(N)) != 0) {
    let nextN = Math.floor(Math.sqrt(N)) + 1;
    return nextN * nextN;
  }
  return N;
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
