const spacing = window.innerWidth / 60;
const maxSize = Math.round(window.innerHeight / 3);
const minSize = 10;
var blobs = [];

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
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
  this.morph = round(random(1,2));
  this.xmorph = round(random()) == 1;
  this.update = function(){
    this.breathe();
    this.draw();
  }

  this.draw = function(){
    fill(this.c);
    noStroke();
    ellipse(this.x, this.y, this.currentSize, this.currentSize);
  }

  this.breathe = function(){
    if (this.currentSize > this.size * 2 || this.currentSize < minSize / 2) this.grow *= -1;
    this.currentSize += this.grow;
  }

  this.morph = function(){
  }
}

// var blobsIndex =  0;

// for(i = maxSize / 2; i <= window.innerWidth - maxSize; i += spacing){
//   const x =  i;
//   const y = Math.round((Math.random() * window.innerHeight / 4) + window.innerHeight / 4);
//   const w = Math.round(Math.random() * window.innerHeight / 4);
  
//   blobs[blobsIndex] = new Blob(x, y, w);
//   blobs[blobsIndex].draw();
//   blobs[blobsIndex].morph();
//   blobsIndex++;
// }


// for(x = 0 - maxSize; x <= screenW; x = x + spacing){
//   var circle = document.createElement('div');
//   const top = Math.round(Math.random() * 10) + 30;
//   const left = x;
//   const size = Math.random() * maxSize;
//   const delay = Math.random() * 5;
//   const color = (360 * left) / screenW;

//   circle.style.position = 'absolute';
//   circle.style.top = top + '%'; //variation goes here
//   circle.style.left = left + 'px'; //variation goes here
//   circle.style.transform = 'translateY(-50%)';
//   circle.style.width = size + 'px';
//   circle.style.height = size + 'px';
//   circle.style.animationDelay = delay + 's';
//   circle.style.background = `hsl(${color}, 100%, 50%)`;
//   circle.classList.add('blob');
//   document.querySelector('body').appendChild(circle); 
// }