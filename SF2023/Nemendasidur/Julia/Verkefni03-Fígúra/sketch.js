// Hér kemur kóðinn þinn:
var bukur = 200;
var rassinn = 8;
var kinnaliturR = 255;
var kinnaliturB = 166;
var kinnaliturG = 222;
var blikkR = 255;
var blikkB = 238;
var blikkG = 0;


function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
}
function draw() {
  background(1, 0, 41);
  //Sól
  stroke(245, 244, 203);
  strokeWeight(20);
  fill(255, 247, 166);
  ellipse(100,100,200,200);
  // Teiknum búkinn
  stroke(133, 230, 76);
  strokeWeight(18);
  fill(133, 230, 76);
  ellipse(mouseX,mouseY,bukur,120);
  // Teiknum hausinn
  stroke(33, 37, 42);
  strokeWeight(2);
  fill(133, 230, 76);
  ellipse(mouseX - bukur/2,mouseY, 110,100);
  //Teiknum rassinn
  stroke(222, 230, 158);
  strokeWeight(rassinn);
  fill(blikkR, blikkB, blikkG);
  arc(mouseX + bukur/2 -40, mouseY, 100, 110, 3*PI/2, PI/2);
  //Teiknum vængi
  stroke(3212, 242, 255);
  strokeWeight(2);
  fill(205, 237, 247);
  arc(mouseX , mouseY - 60, 80, 60, PI, TWO_PI);
  // Teiknum augun
  noStroke();
  fill(33, 37, 42);
  ellipse (mouseX - bukur/2 + 15 ,mouseY - 15, 20,20);
  ellipse (mouseX - bukur/2 - 25,mouseY - 15, 20,20);
  // endurskin í augum
  fill(242, 249, 252);
  ellipse (mouseX - bukur/2 + 17,mouseY - 20, 7,7);
  ellipse (mouseX - bukur/2 - 23,mouseY - 20, 7,7);
  // roði í kinnum
  fill(kinnaliturR,kinnaliturB,kinnaliturG);
  ellipse (mouseX - bukur/2 + 35,mouseY + 8, 15,15);
  ellipse (mouseX - bukur/2 - 38,mouseY + 8, 15,15);
  //munnur
  stroke(33, 37, 42);
  strokeWeight(2);
  fill(255, 166, 222)
  arc(mouseX - bukur/2 - 5,mouseY, 20, 60, 0, PI, CHORD);


}

function mousePressed() {
	bukur = random (150, 300);
  rassinn = random (8, 12);
  kinnaliturR = 255;
  kinnaliturB = 130 - random(0, 100);
  kinnaliturG = 200 - random(30, 90);
  blikkR = 246 - random(0, 50);
  blikkB = 238 - random((-15),20 );
  blikkG = 82 - random(0, (-90));
}
