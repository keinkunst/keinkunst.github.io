var zoogs = [];

function setup() {
  createCanvas(600, 600);
  // Búum til þrjá zoog hluti.
  for (var i = 0; i < 100; i = i+1){
    zoogs[i] = new Zoog(random(200,400),random(100,400),random(50,200));
  }
}

function draw() {
	background(200,150,0);
  fill(255,200,0);
	ellipse(300,300,500,500);
  // Ef hluturinn er nálgt miðjunni, þá hreyfir hann sig
  // Ef ekki þá stoppar hann og blikkar bara augunum.
  for (var i = 0; i < zoogs.length; i = i+1){
    if(fjarl(zoogs[i].x,zoogs[i].y,300,300) > 250){
		zoogs[i].blink();
	}
	else {
		zoogs[i].move();
	}
	zoogs[i].show();
  }
}


function mousePressed(){
  for (var i = zoogs.length-1; i >= 0; i = i-1){
    if(fjarl(zoogs[i].x,zoogs[i].y,mouseX,mouseY) < 20){
		    zoogs.splice(i,1);
	  }
  }
}

// Klasinn Zoog
// (x,y): er miðpunkturinn sem hann er teiknaður útfrá.
// bukur: er lengdin á búknum
// dir: er stefnan sem hann ferðast í
// speed: er hraðinn sem hann ferðast á
// eyecolor: er liturinn á augunum hans
class Zoog{
  constructor(x,y,bukur) {
    this.x = x;
    this.y = y;
    this.bukur = bukur;
		this.dir = random(0,2*PI);
		this.speed = random(1,3);
		this.eyeColor = color(100,100,100);
  }

  // Teiknar geimveruna zoog
  show(){
    rectMode(CENTER);
    // Teiknum búkinn
    fill(236,36,94);
    rect(this.x,this.y,40,this.bukur);
    // Teiknum hausinn
    fill(255);
    ellipse(this.x,this.y - this.bukur/2, 80,80);
    // Teiknum augun
    fill(this.eyeColor);
    ellipse (this.x - 25,this.y - this.bukur/2, 20,40);
    ellipse (this.x + 25,this.y - this.bukur/2, 20,40);
    // Teiknum fæturna
    line (this.x - 20, this.y + this.bukur/2, this.x - 20, this.y + this.bukur/2 + 50);
    line (this.x + 20, this.y + this.bukur/2, this.x + 20, this.y + this.bukur/2 + 50);
  }

  // Hreyfir zoog um skjáinn.
  // Hann minnkar sífelt hraðann, en velur svo slembistenfu
  // og fyglir henni á nyjum slbenum hraða.
	move(){
		this.x = this.x + this.speed*cos(this.dir);
		this.y = this.y + this.speed*sin(this.dir);
		this.speed = this.speed/1.1;
		if(this.speed < 0.1){
			this.dir = random(0,2*PI);
			this.speed = random(1,5);
		}
	}

  // Velur slembinn lit fyrir augun á zoog.
	blink(){
		this.eyeColor = color(random(255), random(255), random(255));
	}
}




// Skilar fjarlægðinni á milli punktanna
// (x1,y1) og (x2,y2).
function fjarl(x1,y1,x2,y2){
  var dist = sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
  return dist;
}
