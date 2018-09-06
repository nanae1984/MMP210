/*
    Self Portrait
    v1
    by nanae
    mmp 210 exple week2
*/

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(220);
    
    // head
    rect(100,100,200,250);
    
    // eyes
	ellipse(280, 180, 100);
    ellipse(120, 180, 100,50);
    
    // mouth
    rect(150,280,100,25,10);
}