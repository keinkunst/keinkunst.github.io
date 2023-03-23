var boltiX = 100;
var boltiY = 100;
var hradiX = 6;
var hradiY = -7;
var boltiStaerd = 20;
var stig = 0;
var spadiBreidd = 150;
var spadiThykkt = 25;
var spadiY;

function setup() {
	createCanvas(500,500);
	spadiY = height - 45;
	rectMode(CENTER);
	textFont("Courier New",16);
	textStyle(BOLD);
}

function draw() {
  background(0,0,0);
	// Reikna ný hnit út frá hraða boltans:
  boltiX = boltiX + hradiX;
  boltiY = boltiY + hradiY;
	// Athuga hvort boltinn snertir vegginn hægra megin:
  if ((boltiX > width-boltiStaerd/2))  {
    hradiX = hradiX * -1.01;
     }
  if ((boltiX < boltiStaerd/2 ))  {
    hradiX = hradiX * -1
    }
  	// Athuga hvort boltinn snertir þakið
  if ((boltiY < boltiStaerd)) {
    hradiY = hradiY * -1;
  }
  // Athuga hvort bolti snertir spaða:
  if(abs(spadiY - boltiY) < boltiStaerd/2 + spadiThykkt/2 && abs(mouseX - boltiX) < boltiStaerd/2 + spadiBreidd/2){
    hradiY = hradiY * -1.01;
    stig= stig+1
  }
	// Teikna boltann
  fill(236,36,94);
  ellipse(boltiX, boltiY, boltiStaerd, boltiStaerd);
	// Teikna spaðann
  fill(300,300,300);
  rect(mouseX,spadiY ,spadiBreidd,spadiThykkt);
  fill (0);
	// Teikna stigin
  fill(300);
  text("Stig: " + stig,10,20);
}
