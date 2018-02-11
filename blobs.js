const spacing = window.innerWidth / 40;
const maxSize = Math.round(window.innerHeight / 3);
const minSize = 10;
var blobs = [];

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  noStroke();
  blendMode(MULTIPLY);
  for (x = 0; x <= window.innerWidth; x+= spacing){
    var blob = new Blob(x, round(window.innerHeight * random(.3, .7)), random(minSize, maxSize));
    blobs.push(blob);
  }
}

function draw(){
  clear();
  blobs.forEach(function(blob){
    blob.update();
  });
}


function Blob(x, y, size){
  this.x = x;
  this.y = y;
  this.size = size;
  this.currentSize = this.size;
  this.hue = round((360 * this.x) / window.innerWidth);
  this.c = color('hsl(' + this.hue + ', 100%, 50%)');
  this.grow = round(random(1,2));

  this.update = function(){
    this.breathe();
    this.draw();
  }

  this.draw = function(){
    fill(this.c);
    ellipse(this.x, this.y, this.currentSize, this.currentSize);
  }

  this.breathe = function(){
    if (this.currentSize > this.size * 2 || this.currentSize < minSize / 2) this.grow *= -1;
    this.currentSize += this.grow;
  }
}