var fluga;
var x = 0;
var y = 0;
var litur;

function preload() {
  fluga = loadImage("Balloon.jpg");
}

function setup() {
  createCanvas(900, 600);
  fluga.loadPixels();
  background(0);
  noStroke();
  rectMode(CENTER);
  image(fluga,0,0);
}

function draw() {
	for(var i = 0; i < 20; i=i+1){
    x = random(0,width);
    y = random(0,height);
    litur = fluga.get(x, y);
		fill(0,litur[1],litur[2]);
		ellipse(x, y, 5, 5);
	}
}
