/*
    Sound Example
    11.20.2018
*/

// sound file variables
var apple;
var flip;
var bkmusic;

var x = 100;
var y = 100;
var s = 100;
var r = 0;
var g = 0;
var b = 0;

function preload() {
    apple = loadSound("apple.mp3");
    flip = loadSound("flip.wav");
    bkmusic = loadSound("bkmusic.wav");
}

function setup() {
    createCanvas(640, 360);
    apple.playMode("restart");
    bkmusic.play();
}

function draw() {
    if (apple.isPlaying()) {
        background('yellow');
    } else {
        background('green');
    }
    
    fill(r, g, b);
    ellipse(x, y, s);
    
    
    var vol = map(mouseY, 0, height, 1, 0);
    music.setVolume(vol);
    
    // var pan = map(mouseX, 0, width, -1, 1);
    // music.pan(pan);
    
    var rate = map(mouseX, 0, width, 0.1, 3);
    music.rate(rate);
}

function mousePressed() {
    if (apple.isPlaying()) {
        apple.pause();
    } else {
        apple.play();
    }
    
    var d = dist(x, y, mouseX, mouseY);
    if (d < s/2) {
        r = random(255);
        g = random(255);
        b = random(255);
        flip.play();
    }
}
