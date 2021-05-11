//Hér kemur kóðinn minn
// Stilli breytur

var boltiX = 100;
var boltiY = 100;
var hradiX = 5;
var hradiY = -6;
var boltiStaerd = 20;
var spadiBreidd = 150;
var spadiThykkt = 25;
var spadiY;
var stig = 0;
var x = 0;//stigið
var xSpeed = 1;//stigið
var skjar = 0;//staða
var snertiSol = false; // stefna boltans


function setup() {
	createCanvas(windowWidth,windowHeight);
	spadiY = height - 45;
	rectMode(CENTER);
	textFont("Courier New",16);
	textStyle(BOLD);
}//þetta er setup lokan


function draw() { //draw byrjar

  if(skjar == 0){
    startScreen()
  }else if(skjar == 1){
  	leikur()
  }else if(skjar ==2){
  	endScreen()//staða
  }//lokan fyrir stöðuna
}

function leikur(){
  background(1, 7, 46);
	// Reikna ný hnit út frá hraða boltans:
  boltiX = boltiX + hradiX;
  boltiY = boltiY + hradiY;
	// Athuga hvort boltinn snertir vegginn hægra megin:
  if ((boltiX > width-boltiStaerd/2))  {
    hradiX = hradiX * -1;
    snertiSol = false;
  } //loka fyrir hægri vegg
  //vinstri veggur
  if((boltiX < boltiStaerd/2)){
    hradiX = hradiX * -1;
    snertiSol = false;
  }//loka fyrir vinstri vegg

  	// Athuga hvort boltinn snertir þakið
  if ((boltiY < boltiStaerd)) {
    hradiY = hradiY * -1;
    snertiSol = false;
  }//loka fyrir þakið

  // Athuga hvort boltinn snerti botninn
if ((boltiY > height - boltiStaerd/2)) {
  // leikur búinn
}//loka fyrir botninn

  // Athuga hvort bolti snertir spaða:
  if(abs(spadiY - boltiY) < boltiStaerd/2 + spadiThykkt/2 && abs(mouseX - boltiX) < boltiStaerd/2 + spadiBreidd/2) {
    hradiY = hradiY * -1;
    snertiSol = false;
    if (hradiY >0){
      hradiY = hradiY + 1
    }
    else {hradiY = hradiY - 1}
  stig = stig+1

}//loka fyrir snertir spaða?

if(boltiY>spadiY){
  skjar = 2
}

	// Teikna boltann
  fill(0, 237, 0);
  strokeWeight(3)
  stroke(201, 255, 204)
  ellipse(boltiX, boltiY, boltiStaerd, boltiStaerd);
	// Teikna spaðann
  fill(8, 55, 224);
  strokeWeight(2);
  stroke(255, 56, 182);
  ellipse(mouseX,spadiY ,spadiBreidd,spadiThykkt);
  fill (0);
  ellipse(mouseX, spadiY, 10,10);

  //sólin
  fill(255, 3, 19)
  strokeWeight(2)
  stroke(255, 163, 243)

  ellipse(x, 150, 100,100);
 x = x + xSpeed;
 if(x > width){
xSpeed = -1*xSpeed;
  }
   //boltinn snýr við
  if(x < 0){
  xSpeed = -1*xSpeed;
  }
//  if (xsól = xbolti og 150 = ybolti plús radíusar)
if (Math.sqrt(Math.pow(boltiX - x, 2) + Math.pow(boltiY -150,2)) < (boltiStaerd/2 + 100/2)&&!snertiSol) {
stig = stig + 5
snertiSol=true;
} //loka fyrir stig snertir sól

	// Teikna stigin
  fill(0);
  stroke(255, 255, 56)
  text("Stig: " + stig,50,20);

} //leikur endar

function mousePressed(){
	if(skjar==0){
  	skjar=1
  }else if(skjar==2){
  	skjar=0
  }
}//Loka fyrir smella á skjá
  function startScreen(){
  		background(74, 242, 68)
  		fill(255)
  		textAlign(CENTER);
  		text('Ævarandi velkomi/ð/n/nn', width / 2, height / 2)
  		text('Smelltu á músina til að hefja leikinn', width / 2, height / 2 + 20);
  		reset();
  } // loka fyrir byrnunarskjá

  function endScreen(){
  		background(235, 64, 52)
  		textAlign(CENTER);
  		text('LEIK LOKIÐ', width / 2, height / 2)
    	text("Stig = " + stig, width / 2, height / 2 + 20)
      text('klaufinn þú', width/2, height/2 +60)
  		text('smelltu á músina til að byrja annan leik', width / 2, height / 2 + 40);
  } //loka fyrir enda skjá
  function reset(){
  	  stig=0;
    	hradiY=-6;
  }// loka fyrir hefja annan leik
