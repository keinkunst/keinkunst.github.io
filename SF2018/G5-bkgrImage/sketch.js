var rostungur;
var elgur;
var hundur;
var hlutfall = 1;


function preload() {
  rostungur = loadImage('assets/walrus.png'); // https://opengameart.org/content/animal-pack-redux
  elgur = loadImage('assets/moose.png'); // https://opengameart.org/content/animal-pack-redux
  hundur = loadImage('assets/einhundingur.jpg'); // https://www.pexels.com/photo/boston-terrier-wearing-unicorn-pet-costume-1564506/
}

function setup() {
  createCanvas(700,450);
  background(hundur);
  colorMode(HSB);
}

function draw() {
  hlutfall = random(0.1,0.3);
  tint(random(0,360),75,255);
  imageMode(CENTER);
  image(elgur, random(0,width),random(0,height),elgur.width*hlutfall,elgur.height*hlutfall);
}
function mousePressed() {
  imageMode(CENTER);
  noTint();
  image(rostungur,mouseX,mouseY);
}

function keyPressed() {
  imageMode(CORNER);
  noTint();
  background(hundur);
}
