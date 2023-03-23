//Fígúruskopp
var flugaX = 10;
  var flugaY = 10;
  var hradiX = 5;
  var hradiY = 3;
	var bukur = 200;
	var rassinn = 8;
	var kinnaliturR = 255;
	var kinnaliturB = 166;
	var kinnaliturG = 222;
	var blikkR = 255;
	var blikkB = 238;
	var blikkG = 0;

  function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  function draw() {
    background(152, 224, 250);
    flugaX = flugaX + hradiX;
    flugaY = flugaY + hradiY;
  if (abs(flugaX - width/2)> width/2){
    	hradiX = -1*hradiX;
    	bukur = random (90,250);
    	rassinn = random (8, 12);
  		kinnaliturR = 255;
  		kinnaliturB = 130 - random(0, 100);
  		kinnaliturG = 200 - random(30, 90);
  		blikkR = 246 - random(0, 50);
  		blikkB = 238 - random((-15),20 );
  		blikkG = 82 - random(0, (-90));
    }
  if (abs(flugaY - height/2)> height/2){
      hradiY = -1*hradiY;
      bukur = random (90,250);
      rassinn = random (8, 12);
  		kinnaliturR = 255;
  		kinnaliturB = 130 - random(0, 100);
  		kinnaliturG = 200 - random(30, 90);
  		blikkR = 246 - random(0, 50);
  		blikkB = 238 - random((-15),20 );
  		blikkG = 82 - random(0, (-90));

    }

    fluga(flugaX,flugaY,bukur);
  }

  // Teiknar geimveruna zoog
  // með miðju í punktinum (x,y)
  // Bukur: stjórnar lengdinni á búknum
  function fluga(x,y,bukur){
    rectMode(CENTER);
      // Teiknum búkinn
  stroke(133, 230, 76);
  strokeWeight(18);
  fill(133, 230, 76);
  ellipse(x,y,bukur,120);
  // Teiknum hausinn
  stroke(33, 37, 42);
  strokeWeight(2);
  fill(133, 230, 76);
  ellipse(x - bukur/2,y, 110,100);
  //Teiknum rassinn
  stroke(222, 230, 158);
  strokeWeight(rassinn);
  fill(blikkR, blikkB, blikkG);
  arc(x + bukur/2 -40, y, 100, 110, 3*PI/2, PI/2);
  //Teiknum vængi
  stroke(3212, 242, 255);
  strokeWeight(2);
  fill(205, 237, 247);
  arc(x , y - 60, 80, 60, PI, TWO_PI);
  // Teiknum augun
  noStroke();
  fill(33, 37, 42);
  ellipse (x- bukur/2 + 15 ,y - 15, 20,20);
  ellipse (x- bukur/2 - 25,y - 15, 20,20);
  // endurskin í augum
  fill(242, 249, 252);
  ellipse (x - bukur/2 + 17,y - 20, 7,7);
  ellipse (x - bukur/2 - 23,y - 20, 7,7);
  // roði í kinnum
  fill(kinnaliturR,kinnaliturB,kinnaliturG);
  ellipse (x - bukur/2 + 35,y + 8, 15,15);
  ellipse (x - bukur/2 - 38,y + 8, 15,15);
  //munnur
  stroke(33, 37, 42);
  strokeWeight(2);
  fill(255, 166, 222)
  arc(x - bukur/2 - 5,y, 20, 60, 0, PI, CHORD);


}
