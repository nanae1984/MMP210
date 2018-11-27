/*
    Sound Example 
    by nanae
    11.20.2018
*/

//sound file variables
var chikens;
var coin;
var music;
var x = 100;
var y = 100;
var s = 100;
var r = 0;
var g = 0;
var b = 0;

function preload(){
    chikens = loadSound("chickens.mp3");
    coin = loadSound("coin.mp3");
    music = loadSound("music.mp3");
}

function setup(){
    createCanvas(640, 360);
    chickens.playMode()
    music.play();
    
}

function draw(){
    if 
    background("green");
    
    fill(r, g, b);
    ellipse(x, y ,s);
    
    var vol = map(mouseX, )
    music.vol();
}

function mousePressed(){
    if (chickens.isPlaying()){
        chickens.pause();
    }else{
        chickens.Playing();
    }
    
    var d = dist(x, y, mouseX, mouseY);
    if (d < s/2){
        r = random(255);
        b = random(255);
        g = random(255);
        coin.play();
    }
    
}