var rostungur;
var hundur;

function preload() {
  rostungur = loadImage('assets/walrus.png');
  hundur = loadImage('assets/einhundingur.jpg');
}

function setup() {
  createCanvas(700,450);
  background(hundur);
  colorMode(HSB);
}

function draw() {
  fill(random(0,360),75,255);
  ellipse (random(0,width),random(0,height),10,10);
}
function mousePressed() {
  imageMode(CENTER);
  image(rostungur,mouseX,mouseY);
}

function keyPressed() {
  imageMode(CORNER);
  background(hundur);
}
