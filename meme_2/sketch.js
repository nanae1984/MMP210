/* 
    Meme v2 
    by Nanae 
    10.18.2018
    Animation
    mmp 210 week 7
 */


var brain;
//var cube;
var word;
var word2;
//var creative;
//var logical;
var keyIsPressed;
var x = 100;
var y = 100;
var speed = 1;
var puzzle;
var v = 0;
var c = 1;
var flower;
var flower2;
var r = 255, g = 255, b = 255;
function preload() {
   // paper = loadImage("paper.png");
   // paper2 = loadImage("paper2.png");
    brain = loadImage("brain.png");
    word = loadImage("creative.png");
    word2 = loadImage("logical.png");
    //creative = loadImage("creative.jpeg");
   // logical = loadImage("logical.jpg");
    puzzle = loadImage("puzzle.png");
    flower = loadImage("flower.png");
    flower2 = loadImage("flower2.png");
    
    


}

function setup() {
    createCanvas(500, 500);
    textFont('menlo');
	textSize(20);
    fill(0, 102, 153);
    
	
	noStroke();
}

function draw() {
    background(0);
    rectMode(CENTER);
    
	image(brain,x-100, 0,width,height);
	x += speed;
	if (x > width || x < 0) {
		speed *= -1;
	}
    image(word, 410, 270, 100,200);
    //y += speed;
	//if (y > height*2) {
		//y = -300;
	//}
    image(word2, 0, 10,50,100);
    //y -= speed;
   // if (y <0){
        //y = height;
   // }
    image(flower, width/2 + 50, y,50,50);
	y += speed;
    image(flower,x, y, 40,40);
    x +=1;
    y +=2;
    if (x > width) {
		x = 0;
	}
    if (y > height) {
		y = 0;
	}
    //image(flower2,x-40, y-70, 40,40);
    //x +=0.5;
    //y +=0.5;
    //if (x > width) {
		//x = 0;
	//}
   // if (y > height) {
		//y = 0;
	//}
    
    //fill(r,g,b);
   //ellipse(270,y/2,30);
    //function mousePressed() {
	//r = map(mouseX, 0, width, 0, 255); // red
	//g = map(mouseY, 0, height, 255, 0); // green
	//b = map((mouseX + mouseY) / 2, 0, width + height, 0, 255); // blue
//}
  
    push();
   fill(v, 0, 100);
	//noStroke();
	//ellipse(270, 250, 20);
    translate(300, height/2);
	var r = frameCount / 200 * PI;
	rotate(r);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    rect(r, 0, 30, 30);
    rotate(PI/10);
    v += c;
	if (v > 255 || v < 0) {
		c *= -1;
	}
    pop();
    
    push();
    translate(width/4, height/4);
	var r = frameCount / 500 * PI;
	rotate(r);
    image(puzzle,0,200,30,30);
    image(puzzle,100,100,30,30);
    pop();
    
    var mod = 200;
    text(frameCount % mod-20, frameCount % mod-20, 100);
    text(frameCount % mod+50, frameCount % mod+50, 210);
	text(frameCount % mod, frameCount % mod, 160);
    text(frameCount % mod-100, frameCount % mod-100, 210);
    text(frameCount % mod+10, frameCount % mod+10, 260);
    text(frameCount % mod-60, frameCount % mod-60, 310);
    text(frameCount % mod+50, frameCount % mod+50, 360);
    text(frameCount % mod-30, frameCount % mod-30, 410);
    text(frameCount % mod-110, frameCount % mod-110, 460);
    if (keyIsPressed && keyCode == 32) {
        location.href = '../'
    }
}
   