// Hér kemur kóðinn þinn:
let xPos = 200;
let yPos = 200;
let i = 0;

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(163,235,255)
    frameRate(30);

}
function draw(){
background((163 - Math.ceil(i)), (235 - Math.ceil(i)), 255);
fill(41, 44, 51); // eldfjall
beginShape();
vertex(500, 600);
vertex(900, 600);
vertex(1100,1000);
vertex(300,1000); //eldfjall
endShape();
noStroke();
fill(255, 197, 51); //gulur
xPos = xPos + 0.5;
yPos = yPos + 0.1;
i = i + 0.1;
if (xPos > 1400) {
  yPos = 200;
  xPos = 200;
  i = 0;
}
noStroke();
ellipse(Math.ceil(xPos),Math.ceil(yPos),150,150);//sól
fill(234,108,80);
ellipse(random(500,900), random(600,200), 40,40);
fill(191, 61, 0);
rect(random(500,900),random(600,200), 20,50);
}
