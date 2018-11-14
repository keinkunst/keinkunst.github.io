
function setup() {
	createCanvas(500, 500);
	rectMode(CENTER);
	frameRate(10);
}

function draw() {
	background(200,0,0);
	AGN35(200,400, 50, 30, 50, 100);
	AGN35(400,300, 70, 10, 100, 30);
}

function AGN35(x,y,haus,hals,bukurW,bukurH) {
	noStroke();

	// Teikna búkinn
	fill(200);
	rect(x, y, 2 * bukurW, 2 * bukurH);
	strokeWeight(2);
	stroke(0);
	beginShape();
	vertex(x - bukurW*0.2, y - bukurH*0.7);
	vertex(x + bukurW*0.7, y - bukurH*0.7);
	vertex(x + bukurW*0.7, y + bukurH*0.7);
	vertex(x - bukurW*0.2, y + bukurH*0.7);
	endShape(CLOSE);
	fill(0);
	stroke(0);
	ellipse(x, y - bukurH*0.35,10,10);
	for (var i = 0; i < 2; i++) {
		for (var j = 0; j < 4; j++) {
			fill(random(255),255,random(255))
			rect(x - 0.8*bukurW + 0.1*(2*i + 1)*bukurW,y - bukurH*0.7 + 7/40*(2*j+1)*bukurH,bukurW*0.2,bukurH*0.35);
		}
	}

	// Teikna Hálsinn
	noStroke();
	fill(150);
	rect(x, y - bukurH - hals, max(min((1000+1)/hals,haus*2 - 20, bukurW*2 - 20),10), 2 * hals);

	// Teikna hausinn
	fill(200);
	var y2 = y - bukurH - 2*hals;
	beginShape();
	vertex(x - haus, y2);
	vertex(x - haus, y2 - 2*haus *4/9);
	vertex(x + haus, y2 - 2*haus * 7/9);
	vertex(x + haus, y2);
	endShape(CLOSE);
	fill(0);
	ellipse(x+1/3*haus, y2 - 2/3 * haus,haus * 1.05,haus*1.05);
	ellipse(x-0.6*haus, y2 - 0.6 * haus,haus * 0.6,haus*0.6);
	strokeWeight(2);
	stroke(100);
	line(x - haus + 2/9 * haus, y2 - 2*haus *4/9 - 2/27*haus,x - haus + 2/9 * haus, y2 - 2*haus *4/9 - 2/27*haus - 100);
	noStroke();
	fill(100);
	ellipse(x - haus + 2/9 * haus, y2 - 2*haus *4/9 - 2/27*haus - 100, 10,10);

	// Teikna hjólin
	stroke(150);
	fill(150);
	rect(x, y + bukurH + bukurW/8, 14/8*bukurW, bukurW/4);
	fill(200);
	for(var i = 0; i< 8; i++){
		ellipse(x + (7 - 2*i)/8*bukurW, y + bukurH + bukurW / 8, bukurW/4, bukurW/4);
	}

}
