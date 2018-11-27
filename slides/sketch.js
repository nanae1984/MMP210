/* 
   Final presentation
    by Nanae 
    11.15.2018
    Animation
    mmp 210 week 11
 */
var slide = 0;
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



function preload(){
    //images
    plant = loadImage("plant1.png");
    plant2 = loadImage("plant2.png");
    plantB = loadImage("plantsB.png");
    tree = loadImage("tree1.png");
    sun = loadImage("sun.png");
    chou = loadImage("chou.png");
    oto = loadImage("oto.png");
    samurai = loadImage("sumrai.png");
    shinobi = loadImage("shinobi.png");
    hoshi = loadImage("hoshi.png");
    sensor = loadImage('potentiometer.png');
    click =loadImage("Click.png");
    otologo =loadImage("otologo.png");
    sunlogo =loadImage("sunlogo.png");
    arrow = loadImage("arrow.png");
    bookbk = loadImage("bookbk.jpg");
    aleft = loadImage("arrowleft.png");
    aright = loadImage("arrowright.png");
    // sound
    bkmusic = loadSound("bkmusic.wav");
    apple = loadSound("apple.mp3");
    flip = loadSound("flip.wav");
}
function setup() {
    createCanvas(800, 500);
    textFont('Amatic SC, cursive');
	textSize(30);
    fill(0, 102, 153);
    rectMode(RIGHT); 
    textAlign(CENTER, CENTER);
    
    flip.playMode("restart");
    //bkmusic.loop();

	
	noStroke();
}

function draw() {
    background(bookbk, width,height);   
    
    
      if (slide == 0) {
        textSize(50);
          fill("White");
        stroke('rgba(0,255,0,0.25)');
        strokeWeight(4);
        text("Final Project Idea", 250, height/2);
        text("Nanae Itoi", 600, height/2);
        image(aright, width-100, 200, 100,100);
          
    } else if (slide == 1) {
        stroke('rgba(0,255,0,0.25)');
        strokeWeight(4);
        text("Force resisiting sensor :", 200, 100);
        text("Potentiometer", 180,150);
        image(sensor, 450, 150, 250,250);
        //arrows
        image(aright, width-100, 200, 100,100);
        image(aleft, 30, 200, 100,100);
    } else if (slide == 2) {
        stroke('rgba(0,255,0,0.25)');
        strokeWeight(4);
        text("theme: a knowledge of tree", 200, 100);
        noStroke();
        text("They are small grasses at first.", 210, 150);
        text("They grow by using the potentiomer.",230, 200);
        image(plantB, 100,350,100,100);
        image(plantB, 300,350,100,100);
        image(plantB, 500,350,100,100);
        image(tree, 100, 350, 100, 110);
        image(tree, 300, 350, 100, 110);
        image(tree, 600, 350, 100, 110);
        image(plant2, 30, 350, 100,150);
        image(plant2, 200, 350, 100,150);
        image(plant2, 500, 350, 100,150);
        image(plant, 400, 350, 100,130);
        //arrows
        image(aright, width-100, 200, 100,100);
        image(aleft, 30, 200, 100,100);

    }else if (slide == 3){
         textSize(30);
        text("They are growing,", 200, 100);
        text("and to bear Kanji fruit", 200,150);
        image(plantB, 100,300,200,200);
        image(plantB, 300,200,300,300);
        image(tree, 100, 100, 300, 400);
        image(tree, 300, 100, 300, 400);
        image(sun, 300, 300, 100,100);
        image(plant2, 200, 200, 300,400);
        image(plant, 400, 200, 400,400);
        image(sun, 300, 300, 100,100);
        image(chou, 500, 200, 100,100);
        image(oto,100,200,100,100);
        image(samurai,150,300,100,100);
        image(shinobi,400, 100,100,100);
        image(hoshi, 550,300,100,100);
        textSize(30);
        text("They are growing,", 200, 100);
        text("and to bear Kanji fruit", 200,150);
        //arrows
        image(aright, width-100, 200, 100,100);
        image(aleft, 30, 200, 100,100);
        
    }else if (slide == 4){
         textSize(30);
        text("When you click on an Kanji fruit,", 220, 100);
        text("it turns into a picture that made sense of kanji written on that apple", 370, 150);
        image(sun, 200, 200, 200, 200);
        image(click, 250, 300, 100,100);
        image(sunlogo, 500, 220, 150, 150);
        image(arrow, 400, 250, 70,70);
        //arrows
        image(aleft, 30, 200, 100,100);
    }
    }
function mousePressed(){
    if (mouseX> width/2){
        if (slide < 4){
            slide++;
        }
    }else{
        if(slide>0){
            slide--;
        }
    }
    if (flip.isPlaying()) {
        flip.pause();
    } else {
        flip.play();
    }
}
   