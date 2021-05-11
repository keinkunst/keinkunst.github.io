// Hér kemur kóðinn þinn:
var zoogX = 10;
  var zoogY = 10;
  var zoogBukur = 100;
  var hradiX = 5;
  var hradiY = 3;

  function setup() {
    createCanvas(400,550);
  }
  function draw() {
    background(255,200,0);
    zoogX = zoogX + hradiX;
    zoogY = zoogY + hradiY;
    if (abs(zoogX - width/2)> width/2){
      hradiX = -1*hradiX;
      zoogBukur = random (75,200);
    }
    if (abs(zoogY - height/2)> height/2){
      hradiY = -1*hradiY;
      zoogBukur = random (75,200);
    }

    zoog(zoogX,zoogY,zoogBukur);
  }

  // Teiknar geimveruna zoog
  // með miðju í punktinum (x,y)
  // Bukur: stjórnar lengdinni á búknum
  function zoog(x,y,bukur){
    rectMode(CENTER);
    // Teiknum búkinn
     fill(16,113,30);
  ellipse(x,y,150,bukur);
  // Teiknum hausinn sem eru augun
  fill(255);
  stroke(16,113,30);
  strokeWeight(5);
  ellipse(x + 50,y - bukur/2, 80,80);
  ellipse(x - 50,y - bukur/2, 80,80);
  // augasteinar
  noStroke();
  fill(0);
  ellipse (x - 25,y - bukur/2, 20,30);
  ellipse (x + 25,y - bukur/2, 20,30);
  //nasir
  fill(3,48,31);
  ellipse (x - 20,y - bukur/6, 10,10);
  ellipse (x + 20,y - bukur/6, 10,10);
  //munnur
  fill(0);
  arc(x,y + bukur/20,40,40, 0, PI, 2);
  fill(16,113,30);
  arc(x,y + bukur/25,35,35, 0, PI, 2);
  //blush
  fill(245,105,173);
  ellipse (x - 40,y - bukur/7, 13,10);
  ellipse (x + 40,y - bukur/7, 13,10);
  }
