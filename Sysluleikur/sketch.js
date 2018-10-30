var island;
var syslur;
var areas = [];
var names = [];
var N = 46;   //Sýslurnar eru 46
var HUD = 65; // HUD-ið er 65 pixla hátt.
var areasInPlay = 46;
var left = [];
var right = [];
var times = [];
var won;
var playing;
var score;
var startingTime;

function preload() {
  island = loadImage('data/Island.png');
  syslur = loadTable('data/syslur.csv', 'csv', 'header');
  for (var i = 0; i < N; i++) {
   var row = syslur.getRow(i);
   areas[i] = loadImage(row.getString('File'));
   names[i] = row.getString('Name');
  }
}

function setup() {
  createCanvas(900,715);
  image(island, 0, 0);
}
