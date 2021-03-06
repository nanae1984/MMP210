/* 
   Final Project
 */
//image
var sun, shinobi;
var chou, oto, hoshi;
var samurai;
var ai, heart, tori;

//sound
var bkmusic;
var stars, suns, toris, otos;
var ais, samurais, shinobis, chos;

// gif
var gifDom;
var heartDom;
var sunDom;
var birdDom;
var otoDom;
var starDom;
var samuraiDom;
var shinobiDom;
var toriDom;
var patelDom, patel2Dom;

//arduino
var serial;
var portName = "/dev/cu.usbmodem1411";
var sensorValue;
var sensor;
var plant, plant2;
var plantB;
var tree, leaf;


function preload() {
    //plants
    tree = loadImage("img/treew.png");

    //fruits
    sun = loadImage("img/whitesun.png");
    chou = loadImage("img/white.png");
    oto = loadImage("img/whiteoto.png");
    samurai = loadImage("img/whitesamurai.png");
    shinobi = loadImage("img/whiteshinobi.png");
    hoshi = loadImage("img/whitehoshi.png");
    ai = loadImage("img/ai.png");
    tori = loadImage('img/tori.png');
    
    
    //gif
    gif = loadImage("gif/chou.gif");
    heart = loadImage("gif/heart.gif");
    sunlogo = loadImage('gif/sun.gif');
    otologo = loadImage('gif/oto.gif');
    starlogo =  loadImage('gif/star.gif');
    samurailogo = loadImage('gif/samurai.gif');
    shinobilogo = loadImage('gif/shinobi.gif');
    torilogo = loadImage('gif/tori.gif');
    
    // sound
    bkmusic = loadSound("sound/bkmusic.mp3");
    chos = loadSound('sound/cho.mp3');
    stars = loadSound('sound/star.mp3');
    suns = loadSound('sound/sun.mp3');
    toris = loadSound('sound/tori.mp3');
    otos = loadSound('sound/oto.mp3');
    ais = loadSound('sound/ai.mp3');
    samurais = loadSound('sound/samurai.mp3');
    shinobis = loadSound('sound/shinobi.mp3');
    
    //other
    patel = loadImage('gif/patel.gif');
    patel2 = loadImage('gif/patel.gif');
    
}

function setup() {
    var canvas = createCanvas(1000, 700);
    canvas.drawingContext.miterLimit = 2;
    canvas.parent(document.getElementById('gif'));
    
    //bkmusic.loop();

    textFont('Amatic SC, cursive');
    textSize(30);
    fill(0, 102, 153);
    rectMode(RIGHT);
    textAlign(CENTER, CENTER);
    noStroke();
    imageMode(CENTER);

    //gif
    gifDom = createImg('gif/chou.gif');
    gifDom.size(375, 326);
    gifDom.position(580, 100);
    gifDom.parent(document.getElementById('gif'));
    
    heartDom = createImg('gif/heart.gif');
    heartDom.size(220, 220);
    heartDom.position(800, 200);
    heartDom.parent(document.getElementById('gif'));
    
    sunDom = createImg('gif/sun.gif');
    sunDom.size(200, 200);
    sunDom.position(200, 200);
    sunDom.parent(document.getElementById('gif'));
    
    otoDom = createImg('gif/oto.gif');
    otoDom.size(200, 200);
    otoDom.position(50, 100);
    otoDom.parent(document.getElementById('gif'));
    
    starDom = createImg('gif/star.gif');
    starDom.size(200, 200);
    starDom.position(450, 220);
    starDom.parent(document.getElementById('gif'));
    
    samuraiDom = createImg('gif/samurai.gif');
    samuraiDom.size(249, 129);
    samuraiDom.position(230, 100);
    samuraiDom.parent(document.getElementById('gif'));
    
    shinobiDom = createImg('gif/shinobi.gif');
    shinobiDom.size(150, 150);
    shinobiDom.position(130, 400);
    shinobiDom.parent(document.getElementById('gif'));

    toriDom = createImg('gif/tori.gif');
    toriDom.size(150, 100);
    toriDom.position(670, 360);
    toriDom.parent(document.getElementById('gif'));
    
    patelDom = createImg('gif/patel.gif');
    patelDom.size(500, 400);
    patelDom.position(90, 30);
    patelDom.parent(document.getElementById('gif'));
    
    patel2Dom = createImg('gif/patel.gif');
    patel2Dom.size(500, 400);
    patel2Dom.position(500, 30);
    patel2Dom.parent(document.getElementById('gif'));

    //arduino
    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);

    serial.open(portName);
}
//arduino
function serverConnected() {
    console.log('connected to server.');
}

function portOpen() {
    console.log('the serial port opened.');
}

function portClose() {
    console.log('The serial port closed.');
}

function serialError() {
    console.log("error");
}

function serialEvent() {
    var currentString = serial.readLine();
    trim(currentString);
    if (!currentString) {
        return;
    }
    sensorValue = currentString;
}

function draw() {

    // arduino
    var c = map(sensorValue, 0, 1023, 0, 180);

    // sky
    background(c, c, c + 85);

    // ground
    fill(c, c + 75, c);
    rect(0, height - 70, width, height * 0.10);

    //plants
    var y = map(sensorValue, 0, 1023, height+270, 320);
    var w = map(sensorValue, 0, 1023, 80, 450);
    image(tree, 150, y, w);
    image(tree, 500, y, w);
    image(tree, 900, y, w);
    

    //fruits with click 
     var s4 = map(sensorValue, 0, 1023, 50, 100);
    if (mouseX > 850 && mouseX < 950 && mouseY > 300 && mouseY < 380 && mouseIsPressed) {
        heartDom.show();
        if (!ais.isPlaying()) {
             ais.play();
         }
    } else {
        image(ai, 900, 300, s4, s4);
        heartDom.hide();
        if (ais.isPlaying()) {
            ais.stop();
        }
    }
     var s = map(sensorValue, 0, 1023, 0, 100);
     if (mouseX > 50 && mouseX < 150 && mouseY > 150 && mouseY < 250 && mouseIsPressed) {
        otoDom.show();
         if (!otos.isPlaying()) {
             otos.play();
         }
         
    } else {
        image(oto, 100, 200, s, s);
        otoDom.hide();
        if (otos.isPlaying()) {
            otos.stop();
        }
    }

     var s = map(sensorValue, 0, 1023, 0, 100);
    if (mouseX > 490 && mouseX < 600 && mouseY > 250 && mouseY < 350 && mouseIsPressed) {
        starDom.show();
        if (!stars.isPlaying()) {
             stars.play();
         }
    } else {
        image(hoshi, 550, 300, s, s);
        starDom.hide();
        if (stars.isPlaying()) {
            stars.stop();
        }
    }
     var s3 = map(sensorValue, 0, 1023, 0, 120);
     if (mouseX > 350 && mouseX < 450 && mouseY > 100 && mouseY < 200 && mouseIsPressed) {
        samuraiDom.show();
         if (!samurais.isPlaying()) {
             samurais.play();
         }
    } else {
        image(samurai, 400, 150, s3, s3);
        samuraiDom.hide();
        if (samurais.isPlaying()) {
            samurais.stop();
        }
    }
    var s = map(sensorValue, 0, 1023, 0, 100);
    if (mouseX > 150 && mouseX < 250 && mouseY > 400 && mouseY < 500 && mouseIsPressed) {
        shinobiDom.show();
        if (!shinobis.isPlaying()) {
             shinobis.play();
         }
    } else {
        image(shinobi, 200, 450, s, s);
        shinobiDom.hide();
        if (shinobis.isPlaying()) {
            shinobis.stop();
        }
    }
    var s2 = map(sensorValue, 0, 1023, 30, 120);
    if (mouseX > 720 && mouseX < 780 && mouseY > 350 && mouseY < 430 && mouseIsPressed) {
        toriDom.show();
        if (!toris.isPlaying()) {
             toris.play();
         }
    } else {
        image(tori, 750, 400, s2, s2);
        toriDom.hide();
        if (toris.isPlaying()) {
            toris.stop();
        }
    }
    
    var s2 = map(sensorValue, 0, 1023, 30, 120);
    if (mouseX < 400 && mouseX > 280 && mouseY < 400 && mouseY > 280 && mouseIsPressed) {
        sunDom.show();
        if (!suns.isPlaying()) {
             suns.play();
         }
    } else {
        image(sun, 300, 300, s2, s2);
        sunDom.hide();
        if (suns.isPlaying()) {
            suns.stop();
        }
    }

     var s4 = map(sensorValue, 0, 1023, 50, 100);
    if (mouseX > 650 && mouseX < 750 && mouseY > 170 && mouseY < 240 && mouseIsPressed) {
        gifDom.show();
        if (!chos.isPlaying()) {
             chos.play();
         }
    } else {
        image(chou, 700, 200, s4, s4);
        gifDom.hide();
        if (chos.isPlaying()) {
            chos.stop();
        }
    }
    
    // patels
    if( mouseX > width/2){
       patelDom.show();
       patel2Dom.hide();
   }
  else{
          patelDom.hide();
          patel2Dom.show();
  }
    if(mouseIsPressed){
        patelDom.hide();
       patel2Dom.hide();
    }
    
}

function keyPressed() {
	if (keyCode == 32) { // Space bar
		bkmusic.play();
	}
    if (keyCode == 13) { // Enter key
			bkmusic.stop();
		}
}