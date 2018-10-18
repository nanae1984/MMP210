/*
    Self Portrait
    v1
    by nanae
    mmp 210 exple week2
    hard coded vol1
*/

function setup() {
	createCanvas(640, 460);
}

function draw() {
	background(220);
    
    rectMode(CENTER);
    fill(250, 217, 220); // half transparent
    stroke(146, 208, 217);
    strokeWeight(5);
    triangle(35, 210, 40, 130, 80, 180);//right ear
    triangle(45, 210, 50, 150, 70, 180);//right ear
    triangle(120, 180, 160, 200, 180, 130);//left ear
    triangle(130, 180, 140, 200, 165, 150);//left ear
    ellipse(100, 235, 150,160); // face
   
	fill(255, 185, 255, 127); // half transparent
    stroke(146, 208, 217); 
    strokeWeight(5);
	ellipse(50, 230, 20); // right eye
	ellipse(150, 230, 20); // left eye
    
   noFill();
	stroke(146, 208, 217); 
    strokeWeight(3);
    ellipse(43, 230, 35); // right eye
	ellipse(143, 230, 35); // left eye

	noFill();
	stroke(146, 208, 217); 
	strokeWeight(5);
	rect(85, 260, 20, 10, 10); // mouth	
    arc(100, 265, 30, 30, 0, PI);
    arc(70, 265, 30, 30, 0, PI);
    arc(88, 279, 22, 20, 0, PI);
    
   stroke(173,165,50);
    line(50,178,50,219); //hair bangs
    line(60,170,50,220); 
    line(75,160,75,215);
    line(90,155,75,215);
    line(95,155,95,220);
    line(110,160,95,220);
    line(120,160,135,215);
    line(140,162,135,215);
    
    strokeWeight(1)
    line(120,260,190,250);//mustache left
    line(120,270,190,280);//mustache left
    line(50,260,10,250);// mustache right
    line(50,270,10,280);// mustache right
    
    fill(173,165,50);
    ellipse(300,300,40); //footsteps right
    ellipse(275,270,20);
    ellipse(300,260,20);
    ellipse(330,270,20);
    
    ellipse(500,100,40); //footsteps left
    ellipse(465,100,20);
    ellipse(480,70,20);
    ellipse(510,65,20);
    
    ellipse(530,340,40); //footsteps bottom
    ellipse(565,340,20);
    ellipse(525,305,20);
    ellipse(555,310,20);
    
}