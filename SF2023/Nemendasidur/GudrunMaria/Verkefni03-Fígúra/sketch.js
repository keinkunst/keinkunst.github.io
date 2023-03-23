// Hér kemur kóðinn þinn:
var bukur = 150;
var augasteinn = 30;
var blush = 13;
var munnur = 0;

function setup() {
  createCanvas(350,550);
  rectMode(CENTER);
}
function draw() {
  background(255,200,0);
  // Teiknum búkinn sem er tæknilega hausinn (fyrir neðan)
  fill(16,113,30);
  ellipse(mouseX,mouseY,150,bukur);
  // Teiknum hausinn sem eru augun
  fill(255);
  stroke(16,113,30);
  strokeWeight(5);
  ellipse(mouseX + 50,mouseY - bukur/2, 80,80);
  ellipse(mouseX - 50,mouseY - bukur/2, 80,80);
  // augasteinar
  noStroke();
  fill(0);
  ellipse (mouseX - 25,mouseY - bukur/2, 20,augasteinn);
  ellipse (mouseX + 25,mouseY - bukur/2, 20,augasteinn);
  //nasir
  fill(3,48,31);
  ellipse (mouseX - 20,mouseY - bukur/6, 10,10);
  ellipse (mouseX + 20,mouseY - bukur/6, 10,10);
  //munnur
  fill(0);
  arc(mouseX,mouseY + bukur/20,40,40, munnur, PI, 2);
  fill(16,113,30);
  arc(mouseX,mouseY + bukur/25,35,35, munnur, PI, 2);
  //blush
  fill(245,105,173);
  ellipse (mouseX - 40,mouseY - bukur/7, blush,10);
  ellipse (mouseX + 40,mouseY - bukur/7, blush,10);


}

function mousePressed() {
	bukur = random (150,150);
  augasteinn = random (30,45);
  blush = random (10,30);
  munnur = random (0,1.5);
}
