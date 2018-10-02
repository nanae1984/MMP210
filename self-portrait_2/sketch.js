/*
    Self Portrait
    v 3
    by nanae
    mmp 210 exple week4
    interactive
*/
var r = 255, g = 255, b = 255; // initialize rgb globally
function setup() {
	createCanvas(640, 460);
}

function draw() {
	background(0);
    
    var faceColor = color(250, 217, 220);
    var outline = color(146, 208, 217);
    var eyeball = color(255, 185, 255, 127);
    var karashi = color(173,165,50);
    var sw = 5;
    var ey = mouseY; //230
    var es = 20;
    var ex = mouseX;//150
    var ex2=35;
    var ew = 150;
    var hx = 145;
    var hy = 155;
    var hy2 = 220;
    var fx = 300;
    var fy = 270;
    var fxl = 500;
    var fyl = 100;
    var fxb = 530;
    var fyb = 340;
    var rx = 140;
    var ry = 265;
    var rw = 30;
    var rh = 30;
    var rs = 0;
    var s = 200; // size
	var o = 50; // offset
    var mx = frameCount;//50;
    var my= 400;
    
    // footsteps
     fill(karashi);
    ellipse(fx,fy+30,es*2); //footsteps right
    ellipse(fx-25,fy,es);
    ellipse(fx,fy-10,es);
    ellipse(fx+30,fy,es);
    
    ellipse(fxl,fyl,es*2); //footsteps left
    ellipse(fxl-35,fyl,es);
    ellipse(fxl-20,fyl-30,es);
    ellipse(fxl+10,fyl-35,es);
    
    ellipse(fxb,fyb,es*2); //footsteps bottom
    ellipse(fxb+35,fyb,es);
    ellipse(fxb-5,fyb-35,es);
    ellipse(fxb+25,fyb-30,es);
    
    //mouse
    fill('#696969');
    stroke('black');
    strokeWeight(0.5);
    ellipse(mx+10, my-10, 17, 20);//mouse ear behind
     fill('#A9A9A9');
    stroke('#696969');
    strokeWeight(1);
    ellipse(mx, my, 40, 25);// body
    ellipse(mx+20, my, 5, 5);// nose
    
    fill('#696969');
    stroke('black');
    strokeWeight(0.5);
    ellipse(mx, my-10, 17, 20);//ear front
    ellipse(mx+10, my-5, 1, 2);//eye
    
    //mouse 2
    fill('#696969');
    stroke('black');
    strokeWeight(0.5);
    ellipse(mx+60, my-60, 17, 20);//mouse ear behind
     fill('#A9A9A9');
    stroke('#696969');
    strokeWeight(1);
    ellipse(mx+50, my-50, 40, 25);// body
    ellipse(mx+70, my-50, 5, 5);// nose
    
    fill('#696969');
    stroke('black');
    strokeWeight(0.5);
    ellipse(mx+50, my-60, 17, 20);//ear front
    ellipse(mx+60, my-55, 1, 2);//eye
    
    //body
    fill(faceColor); // half transparent
    noStroke();
    //rect(ex+90,ey-10, 70,10,10);//tale
    ellipse(ex, ey+90, ew-80,ew-40); // body front
    
    noFill();
    stroke(faceColor);
    strokeWeight(sw+5);
    arc(ex-60,ey+100,ew-90,ew-100,0,PI);
    
    //legs
    fill(faceColor); // half transparent
    stroke('black');
    strokeWeight(sw-4);
    ellipse(ex-45,ey+140,ew-110,ew-70);
    ellipse(ex+45,ey+140,ew-110,ew-70);
    ellipse(ex-60,ey+170,ew-110,ew-120);
    ellipse(ex+60,ey+170,ew-110,ew-120);
    
    
    //hands
    rectMode(CENTER);
    fill(faceColor); // half transparent
    stroke('black');
    strokeWeight(sw-4);
    //noStroke();
    
    rect(ex-30,ey+120, 30,100,20);//hands
    rect(ex+20,ey+120, 30,100,20);
    ellipse(ex-30,ey+180,35,40);
    ellipse(ex+20,ey+180,35,40);
    triangle(ex-75, ey-20, ex-70, ey-100, ex-30, ey-50);//right ear
    triangle(ex-65, ey-20, ex-60, ey-80, ex-40, ey-50);//right ear
    triangle(ex+20, ey-50, ex+60, ey-30, ex+80, ey-100);//left ear
    triangle(ex+30, ey-50, ex+40, ey-30, ex+65, ey-80);//left ear
    ellipse(ex, ey+5, ew,ew+10); // face
    
    //eyes
   	var r = 0; // red;
	var g = map(mouseX, 0, width, 0, 255); // green
	var b = map(mouseY, 0, height, 0, 255); // blue
	fill(r, g, b);
    stroke(outline);
    strokeWeight(sw);
	ellipse(ex-50, ey, es); // right eye
	ellipse(ex+50, ey, es); // left eye
    
   noFill();
	stroke(outline); 
    strokeWeight(sw-2);
    ellipse(ex-57, ey, ex2); // right eye
	ellipse(ex+43, ey, ex2); // left eye

	//noFill();
	//stroke(outline); 
	//strokeWeight(sw);
	//rect(rx, ry-5, rw-10, rh-20, rs+10); // mouth	
    //arc(rx+15, ry, rw, rh, rs, PI);
    //arc(rx-15, ry, rw, rh, rs, PI);
    //arc(rx+3, ry+14, rw-8, rh-10, rs, PI);
    
   //stroke(karashi);
    //line(hx-45,hy+23,hx-45,hy2-1); //hair bangs
    //line(hx-35,hy+15,hx-45,hy2); 
   // line(hx-20,hy+5,hx-20,hy2-5);
   // line(hx-5,hy,hx-20,hy2-5);
    //line(hx,hy,hx,hy2);
   // line(hx+15,hy+5,hx,hy2);
    //line(hx+25,hy+5,hx+40,hy2-5);
    //line(hx+45,hy+7,hx+40,hy2-5);
    
    strokeWeight(sw-4)
    line(ex+20,ey+30,ex+90,ey+20);//mustache left
    line(ex+20,ey+40,ex+90,ey+50);//mustache left
    line(ex-50,ey+30,ex-90,ey+20);// mustache right
    line(ex-50,ey+40,ex-90,ey+50);// mustache right
    
   
    fill('#FF937D');
	stroke("#ffddff");
	strokeWeight(4);
	var mouthSize = map(mouseX, 0, ey, 0, 10); // move mouth with mouse x
	mouthSize = max(0, mouthSize); // prevents negative value error
    
	rect(ex, ey+50, s/2, mouthSize, 10); // mouth	
    
    
}

