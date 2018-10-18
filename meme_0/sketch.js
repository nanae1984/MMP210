/* 
    Meme v0 
    by Nanae 
    10.2.2018
    rough draft 
    mmp 210 week 5
 */
    
var paper; // global
var brush;
var paint;

function preload() {
    paper = loadImage("paper.png");
    
    brush = loadImage("brush.png");
    paint = loadImage("paint.png");
    
}

function setup() {
    createCanvas(500, 500);
    
}

function draw() {
    background(220);
    rectMode(CENTER);
    noTint();
    image(paper, 100, 100, width/2, height/2);

    var r = 200; // red;
	var g = map(mouseX, 0, width/2, 100, 225); // green
	var b = 0; // blue
	tint(r, g, b);

    image(paint,mouseX/3,189,200,200);
     noTint();
    image(brush,mouseX/2,180, 100, 100);
    //tint(0, 255, 255);
    
    fill(0);
    stroke('#FF006C');
    strokeWeight(3);
    textAlign(CENTER, CENTER);
    textSize(100);
    textFont("Amatic SC, cursive");
    //text("Enter", 230, 220);
    
    var str = "Enter";
    var length = str.length;
    var n = map(mouseX, 400,180, 0, length);
    var displayString = str.substring(0,n);
    text(displayString, 230, 220)
}