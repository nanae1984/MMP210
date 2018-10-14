/* 
    Meme v1 
    by Nanae 
    10.2.2018
    conditional logic
    mmp 210 week 6
 */

var paper; // global
var brush;
//var paint;
var paper2;
var pink;
var green;
//var blue;
var brain;
var math;
var math2;
var pencil;

function preload() {
    paper = loadImage("paper.png");
    paper2 = loadImage("paper2.png");
    brain = loadImage("brain.png");
    brush = loadImage("brush.png");
    //paint = loadImage("paint.png");
    pink = loadImage("pink.png");
    green = loadImage("green.png");
    //blue = loadImage("blue.png");
    math = loadImage("math.png");
    math2 = loadImage("math2.png");
    pencil = loadImage("pencil.png");


}

function setup() {
    createCanvas(500, 500);

}

function draw() {
    background(220);
    rectMode(CENTER);
    
    noTint();
    //image(brain,0,0,width,height);
    if (mouseX < 100 || mouseX > 400 || mouseY < 100 || mouseY > 400) {
       image(paper2, 100, 100, width / 2, height / 2);
   } else {
        image(paper, 100, 100, width / 2, height / 2);
    }

    if (mouseX < width/2 && mouseY < height/2) {
		// top left
		image(math2, mouseX/3, mouseY, 200, 200);
        noTint();
        image(pencil, mouseX / 2, mouseY, 100, 100);
	} else if (mouseX > width/2 && mouseY < height/2) {
		// top right
		image(pink, mouseX/3, mouseY, 200, 200);
        noTint();
        image(brush, mouseX / 2, mouseY, 100, 100);
	} else if (mouseX < width/2 && mouseY > height/2) {
		// bottom left
		image(math, mouseX/3, mouseY, 200, 200);
        noTint();
        image(pencil, mouseX / 2, mouseY, 100, 100);
	} else {
		// bottom right
		image(green, mouseX/3, mouseY, 200, 200);
        noTint();
        image(brush, mouseX / 2, mouseY, 100, 100);
	}

    

    fill(0);
    stroke('#FF006C');
    strokeWeight(3);
    textAlign(CENTER, CENTER);
    textSize(100);
    textFont("Amatic SC, cursive");
    //text("Enter", 230, 220);

    var str = "Enter";
    var length = str.length;
    var n = map(mouseX, 400, 180, 0, length);
    var displayString = str.substring(0, n);
    text(displayString, 230, 220);
    
    
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
