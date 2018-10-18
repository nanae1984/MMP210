/* 
    Meme v1 
    by Nanae 
    10.2.2018
    conditional logic
    mmp 210 week 6
 */

var paper; // global
//var paint;
var paper2;
 var bunny = createImg("bunny.gif")

function preload() {
    paper = loadImage("paper.png");
    paper2 = loadImage("paper2.png");
   

}

function setup() {
    createCanvas(500, 500);
   
}

function draw() {
    background(220);
    rectMode(CENTER);
    bunny.position(50,100)
    
   // mouse funtion
    if (mouseX < 100 || mouseX > 400 || mouseY < 100 || mouseY > 400) {
       image(paper2, 100, 100, width / 2, height / 2);
   } else {
        image(paper, 100, 100, width / 2, height / 2);
    }

  function mouseMoved() {
  if (gif.loaded() && !gif.playing()){
    var totalFrames = gif.totalFrames();
    var frame = int(map(mouseX, 0, width, 0, totalFrames));
    gif.frame(frame);
  }
}
 function mousePressed() {
  if (gif.playing()) {
    gif.pause();
  } else {
    gif.play();
  }
} 

    
    // link
    stroke(245,250,255,0.5); noFill();
    rectMode(CORNER);
    rect(200, 200, 200, 100);
    if (mouseIsPressed && mouseX > 200 && mouseX < 200 + 200
       && mouseY > 200 && mouseY < 200 + 100) {
        location.href = '../'
    }
    
    if (keyIsPressed && keyCode == 32) {
        location.href = '../'
    }
}
