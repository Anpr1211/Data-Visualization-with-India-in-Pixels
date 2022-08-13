function setup() {
  createCanvas(600, 600);
}
function draw() {
  background(230);
  
  // plate
  stroke(0);
  fill(202, 233, 252);
  ellipse(300,450,450,150);
  
  // rice
  fill(252, 228, 151);
  stroke(0);
  beginShape();
  curveVertex(90, 450);
  curveVertex(99, 470);
  curveVertex(115, 480);
  curveVertex(140, 490);
  curveVertex(180, 500); 
  curveVertex(220, 505);
  curveVertex(280, 505);
  curveVertex(320, 510);
  curveVertex(380, 500);
  curveVertex(420, 495);
  curveVertex(460, 480);
  curveVertex(500, 450);
  curveVertex(490, 400);
  curveVertex(470, 390);
  curveVertex(440, 370);
  curveVertex(400, 360);
  curveVertex(360, 355);
  curveVertex(330, 355);
  curveVertex(290, 350);
  curveVertex(250, 360);
  curveVertex(210, 370);
  curveVertex(160, 380);
  curveVertex(130, 400);
  curveVertex(100, 420);
  endShape(CLOSE);
  
  // chicken piece
  stroke(0);
  fill(194, 129, 25);
  ellipse(350,400,80,80);
  bezier(385, 420, 470, 360, 440, 360, 340, 360);
  fill(255);
  
  // the bone of the chicken
  quad(430, 380, 470, 370, 450, 360, 430, 365);
  stroke(255);
  line(470, 370, 450, 360);
  stroke(255);
  circle(455, 360, 15);
  stroke(0);
  arc(455, 360, 15, 15, PI - QUARTER_PI , TWO_PI);
  stroke(255);
  circle(465, 366, 15);
  stroke(0);
  arc(465, 366, 15, 15, PI + 2*QUARTER_PI , PI);
  
  // egg 
  ellipse(270, 460, 70, 55);
  fill(250, 239, 145);
  ellipse(260, 460, 40, 35);
  
  // potato
  fill(247, 207, 141);
  arc(170, 400, 80, 80, 0, PI + QUARTER_PI, CHORD)  
}
