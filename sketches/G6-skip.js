var ship; //ship breytan geymir myndina.

function preload() {
  //myndinni er hlaðið niður og hún geymd í “ship”
  //myndin er vistuð í sömu möppu
  ship = loadImage("img/spaceship.png");
}

function setup() {
  createCanvas(400, 400);
  ship.resize(100,0);
}
function draw() {
  background(0);
  //myndin á að vera miðjuð
  imageMode(CENTER);
  //myndin sem geymd er í ship er teiknuð í mouseX/Y
  image(ship, mouseX, mouseY);
  //syntax: image( mynd, x, y);
}
