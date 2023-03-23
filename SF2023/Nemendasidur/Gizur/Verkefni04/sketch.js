function setup() {
  createCanvas(310,310);
  background(255, 215, 0);
  fill(0);
  colorMode(HSB);
  frameRate(5);
}

function draw(){
  fill(random(0,360),75,100);

  for(var g = 0; g < 15 ; g = g + 1) {
  for(var i = 0; i < 15 ; i = i + 1) {
    ellipse(15 + g*20 , 15 + i*20, 15, 15);
  }
}
}
