// Hér kemur kóðinn þinn:

function setup() {
  createCanvas(400,400);
  rectMode(CENTER);
}
var litur = 255;
function draw() {
  background(litur);
  if(mouseX < 200 && mouseY < 200){
    fill(50,145,147);
    ellipse(mouseX, mouseY, 50, 50);
  }
  if(mouseX >200 && mouseY < 200){
    fill(238,212,108);
    ellipse(mouseX,mouseY, 50, 50);
  }
  if(mouseX <200 && mouseY > 200){
    fill(235,105,69);
    ellipse(mouseX,mouseY,50, 50);
  }
  if(mouseX >200 && mouseY > 200){
    fill(160,39,108);
    ellipse(mouseX,mouseY, 50, 50);
  }
  if(mouseIsPressed && mouseX <200 && mouseY <200){
    fill(50,145,147);
    rect(mouseX,mouseY,50,50);
  }
  if(mouseIsPressed && mouseX >200 && mouseY < 200){
    fill(238,212,108);
    rect(mouseX,mouseY,50,50);
    }
  if(mouseIsPressed && mouseX <200 && mouseY > 200){
    fill(235,105,69);
    rect(mouseX,mouseY,50,50);
  }
  if(mouseIsPressed && mouseX >200 && mouseY > 200){
    fill(160,39,108);
    rect(mouseX,mouseY,50,50);
  }
}
function keyTyped(){
  if (keyCode === 32){
    litur = 0;
  }
}
function keyReleased(){
  if (litur ===0){
    litur = 255;
  }
}
