/*
   2d graphics poster
*/
var geisha;
var man;


function preload() {
	man = loadImage("man.jpg");
    geisha = loadImage('geisha.jpg')
}

function setup() {
	createCanvas(960, 960);
}

function draw() {
	background(0);
    
    if (mouseX > width/2){
    //right
    image(man, width/2, 0, width/2, height );

} else {
    //left
     image(geisha, 0, 0, width/2, height );
}
    
    
}
   