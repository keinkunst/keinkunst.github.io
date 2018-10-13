var bubbles = [];

function setup() {
  createCanvas(900,500);
	for (var i = 0; i < 150; i++){
		bubbles[i] = new Bubble(random(width),random(height), random(40,70), color(random(220,255),random(220,255),random(220,255)));
	}
}

function draw() {
  background(250,50,100);

	for (var i = 0; i < bubbles.length; i++){
		bubbles[i].move();
		bubbles[i].show();
	}
}

function mouseDragged(){
  // Förum í gegnum bubbles afturábak.
  for (var i = bubbles.length-1; i >= 0; i = i-1){
    // Eyðum kúlu ef smellt er á hana.
    if(fjarl(bubbles[i].x,bubbles[i].y,mouseX,mouseY) < 0.5*bubbles[i].size){
			var ang = random(2*PI);
			bubbles.push(new Bubble(bubbles[i].x +  cos(ang)*0.25*bubbles[i].size,bubbles[i].y + sin(ang)*0.25*bubbles[i].size, 0.5*bubbles[i].size,bubbles[i].litur))
			bubbles.push(new Bubble(bubbles[i].x +  cos(ang+PI)*0.25*bubbles[i].size,bubbles[i].y +  sin(ang*PI)*0.25*bubbles[i].size, 0.5*bubbles[i].size,bubbles[i].litur))
		  bubbles.splice(i,1);
	  }
  }
}

// Skilar fjarlægðinni á milli punktanna
// (x1,y1) og (x2,y2).
function fjarl(x1,y1,x2,y2){
  var dist = sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
  return dist;
}

// Býr til sápukúlu, sem flýtur stjórnlaust um skjáinn.
class Bubble{
  // Smíðar nýja sápukúlu og gefur henni allar þarfar breytur
  constructor(x , y, size,litur) {
    this.x = x;
    this.y = y;
		this.size = size;
		this.litur = litur;
  }
	// Hreyfir sápukúluna til
  move() {
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  }
	// Teiknar sápukúluna
  show() {
    stroke(this.litur);
    strokeWeight(3);
    noFill();
    ellipse(this.x,this.y,this.size,this.size);
  }
}
