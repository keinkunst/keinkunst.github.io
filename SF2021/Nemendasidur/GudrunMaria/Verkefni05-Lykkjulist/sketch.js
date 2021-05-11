// Hér kemur kóðinn þinn:
function setup() {
  createCanvas(500,400);
  background(62,182,230);
  fill(0);
  colorMode(HSB);
  frameRate(2);
}

function draw(){
  fill(random(30,120),75,100);
  for(var i = 0; i < 19 ; i = i + 1) {
    textSize(20);
    textAlign(CENTER);
    text("vor",80,25+i*20);
    text("spring",135,25+i*20);
    text("fruhling",210,25+i*20);
    text("primavera",300,25+i*20);
    text("printemps",400,25+i*20);
  }
}
