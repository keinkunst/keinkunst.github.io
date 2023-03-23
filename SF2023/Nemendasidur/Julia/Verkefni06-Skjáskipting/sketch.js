//Skiptu sjánum í a.m.k. 4 hluta.
//Eftir því á hvaða hluta skjásins músarbendillinn er, þá sést einhver ákveðinn munur á myndinni.
//Músartakkinn hefur áhrif á skriftuna.
//Bilsláin hefur áhrif á skriftuna.
var takki = true;


function setup() {
	createCanvas(windowWidth,windowHeight);
  background(140, 203, 255);
	noStroke();
}
function keyTyped(){
  if(key===' '){
   takki = !takki;
}
}//ýtt á bil
function draw() {
   if(mouseIsPressed){
     ellipse(mouseX,mouseY, 80, 80);
   }

   if(takki){
     rect(mouseX, mouseY, 80, 80)
   }



if(mouseX < width/2 && mouseY < height / 2){
  strokeWeight(2)
  stroke(255, 184, 254)
  fill(255, 133, 231)
	}
if(mouseX > width/2 && mouseY < height / 2){
fill(171, 255, 150)
	}
if(mouseX < width/2 && mouseY > height / 2){
  fill(217, 92, 255)
	}
if(mouseX > width/2 && mouseY > height / 2){
  fill(246, 255, 150)
	}
}
