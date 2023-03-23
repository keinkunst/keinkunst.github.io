// Hér kemur kóðinn þinn:

var boltiX = 100;
var boltiY = 100;
var hradiX = 5;
var hradiY = -6;
var boltiStaerd = 20;
var stig = 0;
var spadiBreidd = 150;
var spadiThykkt = 25;
var spadiY;
var GameOver = false;

function setup() {
	createCanvas(600,500);
	spadiY = height - 45;
	rectMode(CENTER);
	textFont("Courier New",16);
	textStyle(BOLD);
}

function draw() {
  background(203,224,246);
	// Reikna ný hnit út frá hraða boltans:
  boltiX = boltiX + hradiX;
  boltiY = boltiY + hradiY;
	// Athuga hvort boltinn snertir vegginn hægra megin:
  if ((boltiX > width-boltiStaerd/2))  {
    hradiX = hradiX * -1;
  }
	// Athuga hvort boltinn snertir vegginn vinstra megin
	if ((boltiX < boltiStaerd)) {
	    hradiX = hradiX * -1;
	  }
  	// Athuga hvort boltinn snertir þakið
  if ((boltiY < boltiStaerd)) {
    hradiY = hradiY * -1;
  }
	//Athuga hvort boltinn snertir botninn
	if ((boltiY > height-boltiStaerd/2)) {
	GameOver = true;
}
  // Athuga hvort bolti snertir spaða:
  if(abs(spadiY - boltiY) < boltiStaerd/2 + spadiThykkt/2 && abs(mouseX - boltiX) < boltiStaerd/2 + spadiBreidd/2){
    hradiY = hradiY * -1;
		stig++;
  }
	// Teikna boltann
	fill(16,69,150);
	ellipse(boltiX, boltiY, boltiStaerd, boltiStaerd);
	fill(245,159,39);
	triangle(boltiX-8,boltiY+7, boltiX-8, boltiY-7, boltiX-20,boltiY);
	fill(0);
	ellipse(boltiX+1, boltiY-3, boltiStaerd-15, boltiStaerd-15);
	fill(255);
	ellipse(boltiX+2, boltiY-3, boltiStaerd-18, boltiStaerd-15);


	// Teikna spaðann
  fill(255);
	noStroke();
	rect(mouseX,spadiY ,spadiBreidd,spadiThykkt);
	ellipse(mouseX+60,spadiY-8,50,50);
	ellipse(mouseX+20,spadiY+15,50,50);
	ellipse(mouseX-60,spadiY-8,50,50);
	ellipse(mouseX-20,spadiY+15,50,50);
	ellipse(mouseX, spadiY, 10,10);
	// Teikna stigin
  fill(0);
  text("Stig: " + stig,10,20);

	if(stig > 5 ){
	 boltiX = boltiX + hradiX*0.3;
	 boltiY = boltiY + hradiY*0.3;
	 }

	if(stig > 10 ){
	 boltiX = boltiX + hradiX*0.3;
	 boltiY = boltiY + hradiY*0.3;
	 }

	if(stig > 15 ){
	 boltiX = boltiX + hradiX*0.3;
	 boltiY = boltiY + hradiY*0.3;
	 }

	if(stig > 20 ){
	 boltiX = boltiX + hradiX*0.3;
	 boltiY = boltiY + hradiY*0.3;
	 }

	 if(stig > 25 ){
 	 boltiX = boltiX + hradiX*0.3;
 	 boltiY = boltiY + hradiY*0.3;
 	 }
	 
	 if(stig > 30 ){
 	 boltiX = boltiX + hradiX*0.3;
 	 boltiY = boltiY + hradiY*0.3;
 	 }



	if (GameOver){
    noLoop()
    background(255,200,0);
    textAlign(CENTER);
		textSize(30);
    text("Game Over",300,250);
		textSize(16);
		text("Stig:" + stig,300,275);
		text("Refresha síðuna til að spila aftur",300,300);
  }
}
