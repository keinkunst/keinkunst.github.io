var img;
function preload() {
  img = loadImage('data/Island.png');
}

function setup() {
  createCanvas(img.width,img.height);
  image(img, 0, 0);
  for (var i = 0; i < img.width; i++) {
    var c = img.get(i, img.height / 2);
    stroke(c);
    line(i, height / 2, i, height);
  }
}
