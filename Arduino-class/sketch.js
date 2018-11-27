/* 
    Arduino+p5
    by Nanae 
    11.6.2018
    mmp 210 week 10
 */
var serial;
var portName = "/dev/cu.usbmodem1411";
var sensorValue;
var boss;
var sun;
var star;
function setup() {
    createCanvas(640, 360);
    serial = new p5.SerialPort();
	serial.on('connected', serverConnected);
	serial.on('open', portOpen);
	serial.on('data', serialEvent);
	serial.on('error', serialError);
	serial.on('close', portClose);
	
	serial.open(portName);
	
}
function preload(){
    boss = loadImage("boss.png");
    sun =loadImage("sun.png");
    star = loadImage("star.png");
}


function serverConnected(){
    console.log('connected to server.');
}
function portOpen(){
    console.log('the serial port opened.');
}
function portClose(){
    console.log('The serial port closed.');
}
function serialError() {
    console.log("error");
}

function serialEvent(){
    var currentString = serial.readLine();
    trim(currentString);
    if(!currentString){
        return;
    }
    sensorValue = currentString;
}
function draw() {
    var c = map(sensorValue, 0, 1023, 0, 180);

	// sky
	background(c, c, c + 85);

	// sun
	var y = map(sensorValue, 0, 1023, height, 0);
	image(sun,width/2, y, 100,100);

	// ground
	fill(c+75, c, c);
	rect(0, height * 0.75, width, height * 0.25);
  
    // boss
    var b = map(sensorValue, 0, 1023, 0, width);
    image(boss, b, height/2, 200,100);
    // star 
    var s = map(sensorValue, 0, 1023, height, 100);
    image(star, s, 100, 30,30);
    image(star, s-100, 10, 30,30);
    
}
   