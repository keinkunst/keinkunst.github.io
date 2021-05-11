// Hér kemur kóðinn þinn:
let rotateBy = 45;

function setup() {
	createCanvas(windowWidth,windowHeight);
  background(158, 245, 255);
  angleMode(DEGREES);
}

function draw(){
  ellipse (700, 400, 300,300)
  translate(700, 400);
  rotate(rotateBy);
  noFill();
  strokeWeight(2);
  rotateBy += 12;

  for (var i = 10; i < 100; i += 10) {
    stroke(158, 245, 255);
    line(i + 10, i * 20 , i + 7, 80); //þetta er línan sem kemur
    stroke(255, 105, 125); //rauður
    fill(255, 241, 112); //gulur
    textSize(80);
    text('SUMAR', i * 11, 200 - (i*2) ); //textinn


  }
}
