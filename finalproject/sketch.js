/* 
   Final Project
 */

var plant, plant2;
var plantB;
var tree;
var sun, shinobi;
var chou, oto, hoshi;
var samurai;
var sensor;
var click, sunlogo, otologo;
var arrow, bookbk;
var bkmusic;
var apple, flip;
var aleft; 
var aright;
var rsun; 
var bklake;
var buri;
var ai, heart;



function preload(){
    //images
    plant = loadImage("plant1.png");
    plant2 = loadImage("plant2.png");
    plantB = loadImage("plantsB.png");
    tree = loadImage("tree1.png");
    sun = loadImage("sun.png");
    chou = loadImage("white.png");
    oto = loadImage("oto.png");
    samurai = loadImage("sumrai.png");
    shinobi = loadImage("shinobi.png");
    hoshi = loadImage("hoshi.png");
    sensor = loadImage('potentiometer.png');
    click =loadImage("Click.png");
    otologo =loadImage("otologo.png");
    sunlogo =loadImage("sunlogo.png");
    rsun = loadImage("rsun.png");
    ai = loadImage("ai.png");
    heart = loadImage("heart.png");
    bklake = loadImage("lake.jpeg");
    buri = loadImage("buri.png");
//    arrow = loadImage("arrow.png");
//    bookbk = loadImage("bookbk.jpg");
//    aleft = loadImage("arrowleft.png");
//    aright = loadImage("arrowright.png");
    // sound
    bkmusic = loadSound("bkmusic.wav");
    apple = loadSound("apple.mp3");
    flip = loadSound("flip.wav");
}
function setup() {
    createCanvas(1000, 700);
    textFont('Amatic SC, cursive');
	textSize(30);
    fill(0, 102, 153);
    rectMode(RIGHT); 
    textAlign(CENTER, CENTER);
    
   
    //bkmusic.loop();

	
	noStroke();
}

function draw() {
    background(bklake, width, height);   
    if (mouseX < 850 || mouseX > 950 || mouseY < 60 || mouseY > 100) {
       image(heart, 900, 300, 80,80);
   } else {
        image(ai, 900, 300, 80,80);
    }

    // plants
        image(plantB, 100,600,100,100);
        image(plantB, 300,600,100,100);
        image(plantB, 500,600,100,100);
        image(tree, 100, 600, 100, 110);
        image(tree, 300, 600, 100, 110);
        image(tree, 600, 600, 100, 110);
        image(plant2, 30, 600, 100,150);
        image(plant2, 200, 600, 100,150);
        image(plant2, 500, 600, 100,150);
        image(plant, 400, 600, 100,130);
    
    // fruits
    
        image(rsun, 300, 300, 100,100);
        image(chou, 700, 200, 80,80);
        image(oto,100,200,100,100);
        image(samurai,150,300,100,100);
        image(shinobi,400, 100,100,100);
        image(hoshi, 550,300,100,100);
        image(ai, 900, 300, 80,80);
    // logo
        image(sunlogo, 300, 300, 100, 100);
        
    }
