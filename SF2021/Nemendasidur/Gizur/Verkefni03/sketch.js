
var bukur = 50;
var dans = 2
var fótadans= 2
var tala= 2
var augu= 2
function setup() {
  createCanvas(350,550);
  rectMode(CENTER);
  }

  function draw() {
    background(60,160,60);
    // Teiknum búkinn
    fill(15,15,15);
    fill(130,45,140);

      rect(mouseX,mouseY,40,bukur);
      fill(200);

        ellipse(mouseX,mouseY - bukur/1.8, 50,50);
        fill(100);

  ellipse (mouseX - 15,mouseY - bukur/1.8, 5,10+augu);
  ellipse (mouseX + 15,mouseY - bukur/1.8, 5,10+augu);

  ellipse (mouseX +0 ,mouseY - bukur/3, 15,2+tala);

  line (mouseX - 16+fótadans, mouseY + bukur/2, mouseX - 18, mouseY + bukur/2 + 30);
  line (mouseX + 16+fótadans, mouseY + bukur/2, mouseX + 18, mouseY + bukur/2 + 30);

  line (mouseX - 50, mouseY - bukur/2+dans, mouseX - 20, mouseY + bukur/100 + 5);
  line (mouseX + 50, mouseY - bukur/2+dans, mouseX + 20, mouseY + bukur/100 + 5);
}
function mousePressed() {
dans = random(2,50)
fótadans =random(0,2)
tala=random(0,15)
augu=random(0,3)
    }
