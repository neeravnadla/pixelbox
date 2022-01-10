document.querySelector("body").addEventListener("load", pageoad());

function pageoad() {
  document.querySelectorAll(".in-numb").forEach((e) => {
    // intial random value
    e.value = Math.floor(Math.random() * 21);
    e.addEventListener("input", createPixel);
  });

  createPixel();
}

function createPixel() {
  let pixelOne = parseInt(document.querySelector("#pixel-1").value);
  let pixelTwo = parseInt(document.querySelector("#pixel-2").value);
  if (isNaN(pixelOne) === true) pixelOne = 0;
  if (isNaN(pixelTwo) === true) pixelTwo = 0;
  if (pixelOne >= 0 && pixelTwo >= 0) {
    let totalPixel = perfectPixel(pixelOne + pixelTwo);
    insertBox(totalPixel);
    return createboxes(totalPixel, pixelOne, pixelTwo);
  }
}

function perfectPixel(N) {
  if (Math.sqrt(N) - Math.floor(Math.sqrt(N)) != 0) {
    let nextN = Math.floor(Math.sqrt(N)) + 1;
    return nextN * nextN;
  }
  return N;
}

function insertBox(bb) {
  document.querySelectorAll(".smallbox").forEach((e) => {
    e.remove();
  });

  let boxArray = [];
  boxArray.length = bb;
  boxArray.fill(0);

  boxArray.forEach((e) => {
    let div = document.createElement("div");
    div.className = "smallbox";
    document.querySelector(".pixelbox").appendChild(div);
  });

  document.querySelectorAll(".smallbox").forEach((e) => {
    let boxsize = 250 / Math.sqrt(bb);
    e.style.width = boxsize + "px";
    e.style.height = boxsize + "px";
  });
}

function createboxes(t, p1, p2) {
  let boxes = [];
  boxes.length = parseInt(t);
  boxes.fill(0);

  for (let i = 0; i < p1; i++) {
    boxes[i] = 1;
  }

  for (let i = p1; i < p1 + p2; i++) {
    boxes[i] = 2;
  }

  let shuffledboxes = shuffleArray(boxes);

  let boxid = document.querySelectorAll(".smallbox");

  for (let i = 0; i < shuffledboxes.length; i++) {
    if (shuffledboxes[i] === 1) {
      boxid[i].style.backgroundColor = "var(--p1-color)";
    }
    if (shuffledboxes[i] === 2) {
      boxid[i].style.backgroundColor = "var(--p2-color)";
    }
  }
}

// functions

function getRndInteger(min, max) {
  return;
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
