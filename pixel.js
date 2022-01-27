"use strict";

document.querySelector("body").addEventListener("load", pageLoad());
document.querySelector(".pixelbox").addEventListener("click", pageLoad);

function pageLoad() {
  document.querySelectorAll(".in-numb").forEach((e) => {
    e.value = Math.floor(Math.random() * 21);
    e.addEventListener("keyup", generatePixelbox);
  });
  generatePixelbox();
}

function generatePixelbox() {
  document.querySelectorAll(".smallbox").forEach((e) => e.remove());

  let pixelOne = parseInt(document.querySelector("#pixel-1").value);
  let pixelTwo = parseInt(document.querySelector("#pixel-2").value);

  // check input is number.
  if (isNaN(pixelOne)) pixelOne = 0;
  if (isNaN(pixelTwo)) pixelTwo = 0;
  if (pixelOne >= 0 && pixelTwo >= 0) {
    return newBoxes(perfectPixel(pixelOne + pixelTwo), pixelOne, pixelTwo);
  }
}

function newBoxes(t, p1, p2) {
    
  let color = ["#CA965C", "#EEC373", "#F4DFBA"]; 

  // set grid row and column.
  document.querySelector(".pixelbox").style.setProperty("--grid", Math.sqrt(t));

  // create box.
  for (let i = 0; i < t; i++) {
    let div = document.createElement("div");
    div.className = "smallbox";
    document.querySelector(".pixelbox").appendChild(div);
    div.style.backgroundColor = color[Math.floor(Math.random() * 3)];
  }
}

function perfectPixel(N) {
  if (Math.sqrt(N) - Math.floor(Math.sqrt(N)) != 0) {
    let nextN = Math.floor(Math.sqrt(N)) + 1;
    return nextN * nextN;
  }
  return N;
}
