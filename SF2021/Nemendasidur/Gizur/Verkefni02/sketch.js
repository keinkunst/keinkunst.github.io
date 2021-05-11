// Hér kemur kóðinn þinn:

function setup() {
  createCanvas(400, 400);
  background(240,240,240);
  frameRate(4);
}

function draw() {
fill(100,65,36)
stroke(15,15,15)
quad(70, 400, 180, 200, 220, 200 , 330, 400)
fill(168,11,15)
noStroke()
ellipse(random(100,300), random(0,200), 5,10);
  }
