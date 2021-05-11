// Hér kemur kóðinn þinn:
function setup() {
  //bakgrunnurinn
  createCanvas(400,400);
  background(255, 215, 0);
  //litirnir
  colorMode(HSB);
  frameRate(2);
  strokeWeight(2);
}

function draw() {
  for(var x = 10; x < width; x = x+20){
    //litabil
    fill(random(180,360),75,100);
    for(var y = 10; y < height; y = y+20){
        ellipse(x, y, 15, 15);
    }
  }
}
