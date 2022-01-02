
document.querySelector("body").addEventListener("load", pageoad());


function pageoad(){

    document.querySelectorAll(".in-numb").forEach(e => {
        let eid = "#"+e.id;

     document.querySelector(eid).value = getRndInteger(0,20);})
   

     createPixel();
}




document.querySelectorAll(".in-numb").forEach(e => {e.addEventListener("input", createPixel)});

function createPixel(){

// let pixel, pixelOne, pixelTwo  = 1;

// let pixel =    parseInt(document.querySelector("#t-pixel").value);
let pixelOne = parseInt(document.querySelector("#pixel-1").value);
let pixelTwo = parseInt(document.querySelector("#pixel-2").value);

let totalPixel = perfectPixel(pixelOne + pixelTwo);

// if(pixel==="" ){
//     pixel=0;
// }
if(pixelOne=="" ){
    pixelOne=0;
}
if(pixelTwo=="" ){
    pixelTwo=0;
}


insertBox(totalPixel);
colorBox(totalPixel, pixelOne, pixelTwo);

}


function perfectPixel(N){

    let alredyPerfect = isPerfect(N);

    if (alredyPerfect===true){
   return N;
    }
    else if (alredyPerfect ===false){
      return nextPerfectSquare(N);
    }

}

  function isPerfect(N)
    {
        if ((Math.sqrt(N) -
        Math.floor(Math.sqrt(N))) != 0)
            return false;
        return true;
    }


    function nextPerfectSquare(N)
{
    let nextN = Math.floor(Math.sqrt(N)) + 1;
 
    return nextN * nextN;
}




/// box insterted in box 


function insertBox(bb){

document.querySelectorAll(".smallbox").forEach(e => {
e.remove(); 
})

let boxArray = [];

for (let i = 0; i < bb; i++) {
 boxArray[i] = 0
  }


boxArray.forEach(e => {
    let div = document.createElement("div");
    div.className = "smallbox";
    document.querySelector(".pixelbox").appendChild(div);
    
});
    
document.querySelectorAll(".smallbox").forEach(e => {
let boxsize= 250/(Math.sqrt(bb));
e.style.width = boxsize+"px" ;
e.style.height = boxsize+"px" ;
})

};


// filling boxes


function colorBox(total,p1,p2){

let boxid = document.querySelectorAll(".smallbox");
let dummy = [];

for (let i = 0; i < boxid.length; i++) {

dummy[i] = 0;

  }

for (let i = 0; i < p2;i++) {
crazyloop(2);
  }
 
for (let i = 0; i < p1;i++) {

crazyloop(1);
}




function crazyloop(x){
    
let n = getRndInteger(0,total-1);

    if(dummy[n]===0) {
         dummy[n]=x; 
         if(x===1){
      boxid[n].style.backgroundColor = "#EEC373";
        }
        if(x===2){
            boxid[n].style.backgroundColor = "#CA965C";
        }
  }
    else {
        crazyloop(x);
    }
}


console.log(dummy)
}







function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
} 