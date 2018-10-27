var game;
var island;
var syslur;
var areas = [];
var names = [];
var N = 46;   //Sýslurnar eru 46

function setup() {
  createCanvas(600, 600);
  game = new Game();
}

function draw() {
	background(200,150,0);
  fill(255,200,0);
	ellipse(300,300,500,500);
}



// Klasinn Zoog
// (x,y): er miðpunkturinn sem hann er teiknaður útfrá.
// bukur: er lengdin á búknum
// dir: er stefnan sem hann ferðast í
// speed: er hraðinn sem hann ferðast á
// eyecolor: er liturinn á augunum hans
class Game{
  constructor() {
  this.loadAreas();
  }

  loadAreas() {
      island = loadImage('data/Island.png');
      syslur = loadTable('data/syslur.csv', 'header');
      for (var i = 0; i < N; i++) {
        var row = syslur.getRow(i);
        areas[i] = loadImage(row.getString('File'));
        names[i] = row.getString('Name');
      }
    }
  }
