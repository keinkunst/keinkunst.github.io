function setup() {
  createCanvas(400,400);
  background(255, 215, 0);
  colorMode(HSB);
  frameRate(2);
  strokeWeight(2);
}

function draw() {
  fill(random(255), 215,0);
  ellipse(200,200,50,50);
  fill (0,255,255);
}