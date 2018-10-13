var fluga;
var x = 0;
var y = 0;


function preload() {
  fluga = loadImage("bee.jpg");
}
function setup() {
  createCanvas(900, 600);
  fluga.loadPixels();
  background(0);
  noStroke();
  rectMode(CENTER);
}
function draw() {
  // set fill to color in image at mouse position
  // with a lower alpha to make it painterly
	for(var i = 0; i < 20; i=i+1){
			x = random (0,width);
			y = random (0,height);
		  fill(fluga.get(x, y), 128,50);
			ellipse(x, y, 10, 10);
	}
}
