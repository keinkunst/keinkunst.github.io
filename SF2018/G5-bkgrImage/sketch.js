var rostungur;
var elgur;
var hundur;
var hlutfall = 1;


function preload() {
  rostungur = loadImage('assets/walrus.png');
  elgur = loadImage('assets/moose.png');
  hundur = loadImage('assets/einhundingur.jpg');
}

function setup() {
  createCanvas(700,450);
  background(hundur);
  colorMode(HSB);
}

function draw() {
  fill(random(0,360),75,255);
  hlutfall = random(0.2,0.5);
  image(elgur, random(0,width),random(0,height),elgur.width*hlutfall,elgur.height*hlutfall);
}
function mousePressed() {
  imageMode(CENTER);
  image(rostungur,mouseX,mouseY);
}

function keyPressed() {
  imageMode(CORNER);
  background(hundur);
}
