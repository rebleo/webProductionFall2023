console.log("theMessage!");

let theVariable = 10;
let theOther = 20;
console.log(theVariable * theOther);

//Global
const theButton = document.querySelector("button");
let theBody = document.querySelector("body");

theButton.addEventListener('click', buttonClicked);

function buttonClicked(){
    // do something
    console.log("you clicked!")
    theBody.style.backgroundColor = "yellow";
    theButton.style.boxShadow = "100px"
    document.querySelector("h3").textContent = "you pushed!!"

}

function setup() {
    console.log('p5.js!')
    //runs once
    createCanvas(400, 400);
    background(220, 100,100);
  }
  
  function draw() {
      //runs 60 fps
    ellipse(100,100,10)
    rect(windowWidth - 50, windowHeight - 250, 100,50)
    //(x,y,w, h)
    fill(255,0,0)
    noStroke();
    ellipse(mouseX,mouseY, 50,50)
    
  }