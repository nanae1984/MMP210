/* 
    Meme v2 
    by Nanae 
    10.18.2018
    Animation
    mmp 210 week 7
 */

//var paper; // global
var brush;
//var paint;
//var paper2;
var pink;
var green;
//var blue;
var brain;
var cube;
var word;
var word2;
var creative;
var logical;
var keyIsPressed;
var x = 100;
var y = 100;
var speed = 5;
function preload() {
   // paper = loadImage("paper.png");
   // paper2 = loadImage("paper2.png");
    brain = loadImage("brain.png");
    brush = loadImage("brush.png");
    //paint = loadImage("paint.png");
    pink = loadImage("pink.png");
   // green = loadImage("green.png");
    //blue = loadImage("blue.png");
    cube = loadImage("cube.png");
    word = loadImage("word.png");
    word2 = loadImage("word2.png")
    creative = loadImage("creative.jpeg");
    logical = loadImage("logical.jpg");
    


}

function setup() {
    createCanvas(500, 500);
    textFont('menlo');
	textSize(20);
    fill(0, 102, 153);
}

function draw() {
    background(0);
    rectMode(CENTER);
    
    image(brain,x, y,width,height);
    x += random(-5, 5);
	y += random(-5, 5);
  // push();
   //translate(300, height/2);
  //  image(pink, 300, 100);
    
   // pop();
    
    if (mouseX < width/2 && mouseY < height/2) {
		// top left
		image(word, mouseX/3, mouseY, 250, 250);

	} else if (mouseX > width/2 && mouseY < height/2) {
		// top right
		image(pink, mouseX/3, mouseY, 200, 200);
        
	} else if (mouseX < width/2 && mouseY > height/2) {
		// bottom left
		image(cube, mouseX/3, mouseY, 250, 250);
       
	} else {
		// bottom right
		image(word2, mouseX/3, mouseY, 250, 250);
        
	}
    
    var mod = 200;
	text(frameCount % mod, frameCount % mod, 160);
    
    if (keyIsPressed && keyCode == 32) {
        location.href = '../'
    }
}
   