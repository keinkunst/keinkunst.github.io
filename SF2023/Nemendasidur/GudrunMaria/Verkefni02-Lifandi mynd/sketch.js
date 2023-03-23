// Hér kemur kóðinn þinn:

function setup(){
  createCanvas(1500,800);
  background(255,255,255);
  frameRate(10);
}
function draw(){
  noStroke();
  fill(159,198,231);
  rect(0,0,800,500);
  fill(40,44,52);
  triangle(0,500,500,500,250,250);
  fill(50,54,62);
  triangle(400,200,800,500,100,500);
  fill(203,65,30);
  ellipse(random(200,300),random(200,300),10);
  ellipse(random(325,500),random(250,150),10);
  fill(255,111,64);
  rect(random(325,500),random(250,150),10,10);
  fill(201,219,244);
  ellipse(700,100,100);

}
