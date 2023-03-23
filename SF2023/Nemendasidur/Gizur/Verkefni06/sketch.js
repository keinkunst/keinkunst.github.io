function setup() {
  createCanvas(400,400);
  background(255,200,0);
  rectMode(CENTER);
}

function draw(){
  if(mouseX < 180 && mouseY < 180){
   fill(236, 36, 94)
    ellipse(mouseX, mouseY, 30, 30);
  }
if(mouseX > 180 && mouseY > 180)
  {
  fill(231, 55 , 150)
    ellipse(mouseX, mouseY, 30, 30);
  }
  if(mouseX > 180 && mouseY < 180)
  {
    fill(106, 13 ,173)
    rect(mouseX, mouseY, 30, 30);
  }
  if(mouseX < 180 && mouseY > 180)
  {
   fill(200, 130, 150)
    rect(mouseX, mouseY, 30, 30);
  }
if(mouseIsPressed){
  background(255, 200, 0)
}}
