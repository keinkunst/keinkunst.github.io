var zoog1, zoog2, zoog3;

function setup() {
  createCanvas(600, 600);
  // Búum til þrjá zoog hluti.
  zoog1 = new Zoog(200,400,100);
  zoog2 = new Zoog(300,300,75);
  zoog3 = new Zoog(400,300,150);
}

function draw() {
	background(200,150,0);
  fill(255,200,0);
	ellipse(300,300,500,500);
  // Ef hluturinn er nálgt miðjunni, þá hreyfir hann sig
  // Ef ekki þá stoppar hann og blikkar bara augunum.
	if(fjarlægð(zoog1.x,zoog1.y,300,300) > 250){
		zoog1.blink();
	}
	else {
		zoog1.move();
	}
	zoog1.show();
	if(fjarlægð(zoog2.x,zoog2.y,300,300) > 250){
		zoog2.blink();
	}
	else {
		zoog2.move();
	}
  zoog2.show();
	if(fjarlægð(zoog3.x,zoog3.y,300,300) > 250){
		zoog3.blink();
	}
	else {
		zoog3.move();
	}
  zoog3.show();
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
function fjarlægð(x1,y1,x2,y2){
  var dist = sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
  return dist;
}
