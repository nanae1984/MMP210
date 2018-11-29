/*
   key board example 
*/

var apple;
var flip;

function preload(){
    apple = loadSound("apple.mp3");
    flip = loadSound("flip.wav")
}

function setup(){
    createCanvas(640, 360);
    textSize(40);
    
}

function draw(){
    if (keyIsPressed){
        if (key == r){
            background("red");
                
            }else if (key == b){
                background("blue");
            }else if (key == y){
                background("yellow");
            }
      else{
          background("pink");
      }
    }else{
    background("green");
    }
    fill(255);
    text(keyIsPressed, 50, 50);
    text(key, 50, 100);
    text(keyCode, 50, 150);

}

function keyPressed(){
    // 13 is enter
    if (keyCode == 13){
        coin.play();
    }
    // 65 is a
    if (keyCode == 65){
        flip.play();
    }
    // 32 is space
    if (keyCode == 32){
        if (music.IsPlaying)    
    }
    
}