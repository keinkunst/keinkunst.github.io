// Hér kemur kóðinn þinn:

function setup() {
  createCanvas(230,230);
  background(50, 50, 50);
  fill(0);
  colorMode(HSB);
  frameRate(5);
}

function draw(){
  fill(random(50,360),360);

  for(var g = 0; g < 15 ; g = g + 1) {
  for(var i = 0; i < 15 ; i = i + 1) {
    ellipse(10 + g*15 ,10 + i*15, 15, 15);

    ellipse(115,115,100,100)
  ellipse(115,115,75,75)
    ellipse(115,115,50,50)
    ellipse(115,115,25,25)
    ellipse(115,115,12,12)
    ellipse(115,115,6,6)
    ellipse(115,115,2,2)
 }}}
