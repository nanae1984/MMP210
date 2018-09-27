/*
    Self Portrait
    v 3
    by nanae
    mmp 210 exple week4
    interactive
*/

function setup() {
	createCanvas(640, 460);
}

function draw() {
	background(220);
    
    var faceColor = color(250, 217, 220);
    var outline = color(146, 208, 217);
    var eyeball = color(255, 185, 255, 127);
    var karashi = color(173,165,50);
    var ty = 210;
    var tx = 35;
    var tx2 = 150;
    var sw = 5;
    var ey = 230;
    var es = 20;
    var ex = 100;
    var ew = 150;
    var hx = mouseX;
    var hy = 155;
    var hy2 = 220;
    var fx = 300;
    var fy = 270;
    var fxl = 500;
    var fyl = 100;
    var fxb = 530;
    var fyb = 340;
    var rx = mouseX;
    var ry = 265;
    var rw = 30;
    var rh = 30;
    var rs = 0;
    var lx1 = 120;
    var lx2 = 50;
    var ly = 260;
    var x = pmouseX;
    var y = pmouseY;
    var s = 35; // size
    var f = frameCount;
    
    rectMode(CENTER);
    fill(faceColor); // half transparent
    stroke(outline);
    strokeWeight(sw);
    triangle(tx, ty, tx+5, ty-80, tx+45, ty-30);//right ear
    triangle(tx+10, ty, tx+15, ty-60, tx+35, ty-30);//right ear
    triangle(tx2-30, ty-30, tx2+10, ty-10, tx2+30, tx2-20);//left ear
    triangle(tx2-20, ty-30, tx2-10, ty-10, tx2+15, tx2);//left ear
    ellipse(ex, ey+5, f,f+10); // face
   
	fill(eyeball); // half transparent
    stroke(outline); 
    strokeWeight(sw);
	ellipse(ex-50, ey, es); // right eye
	ellipse(ex+50, ey, es); // left eye
    
   noFill();
	stroke(outline); 
    strokeWeight(sw-2);
    ellipse(ex-57, ey, tx); // right eye
	ellipse(ex+43, ey, tx); // left eye

	noFill();
	stroke(outline); 
	strokeWeight(sw);
	rect(rx, ry-5, rw-10, rh-20, rs+10); // mouth	
    arc(rx+15, ry, rw, rh, rs, PI);
    arc(rx-15, ry, rw, rh, rs, PI);
    arc(rx+3, ry+14, rw-8, rh-10, rs, PI);
    
   stroke(karashi);
    line(hx-45,hy+23,hx-45,hy2-1); //hair bangs
    line(hx-35,hy+15,hx-45,hy2); 
    line(hx-20,hy+5,hx-20,hy2-5);
    line(hx-5,hy,hx-20,hy2-5);
    line(hx,hy,hx,hy2);
    line(hx+15,hy+5,hx,hy2);
    line(hx+25,hy+5,hx+40,hy2-5);
    line(hx+45,hy+7,hx+40,hy2-5);
    
    strokeWeight(sw-4)
    line(lx1,ly,lx1+70,ly-10);//mustache left
    line(lx1,ly+10,lx1+70,ly+20);//mustache left
    line(lx2,ly,lx2-40,ly-10);// mustache right
    line(lx2,ly+10,lx2-40,ly+20);// mustache right
    
    fill(karashi);
    ellipse(fx,f/2+30,f/10*2); //footsteps right
    ellipse(fx-25,f/2,f/10);
    ellipse(fx,f/2-10,f/10);
    ellipse(fx+30,f/2,f/10);
    
    ellipse(fxl,fyl,es*2); //footsteps left
    ellipse(fxl-35,fyl,es);
    ellipse(fxl-20,fyl-30,es);
    ellipse(fxl+10,fyl-35,es);
    
    ellipse(fxb,fyb,es*2); //footsteps bottom
    ellipse(fxb+35,fyb,es);
    ellipse(fxb-5,fyb-35,es);
    ellipse(fxb+25,fyb-30,es);
    
}