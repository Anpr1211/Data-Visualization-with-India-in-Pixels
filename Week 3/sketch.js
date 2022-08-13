// read the json file data.json
function preload() {
  data = loadJSON("data.json");
}

// Setup
function setup() {
  createCanvas(1100, 500);
  background(255);
  fill(0, 0, 0, 1);
  rect(0, 0, 1350, 700);
  textFont("Trebuchet MS");
  
}
// Call the functions
function draw() {
  movieTitle();
  drawSquare1();
  drawSquare2();
  legends();
}

// Function to create the movie title
function movieTitle() {
  fill(0);
  textSize(30);
  strokeWeight(0);
  textAlign(LEFT);
  text("Who are the most profitable music directors of Bollywood?", 50, 50);
}

// Function to create the figures for the first half
function drawSquare1() {
  
  // 5 squares for first 5 movies
  for (let i = 0; i < 5; i++) {
    
    let x_origin = 1.5*i*100 + 100
    
    // name of music director
    fill(0);
    textSize(20);
    strokeWeight(0);
    text(data[i].Music_Director, x_origin-20, 110);
    
    // circle of size proportional to the career (in years)
    strokeWeight(2);
    fill(0);
    stroke(0);
    let radius = data[i].Years_Active*2+20
    circle(x_origin-radius/2, 250-radius/4, radius);
    
    // stem of the note
    let x_line = x_origin
    let y_line = 180-map(data[i].ProfitFactor, 1.4, 2.4, 0, 1000)/20;
    stroke(0);
    line(x_origin, 250, x_line, y_line);
    
    // Color according to the Genre for the first genre
    if (data[i].genre_1 == "drama") {
      stroke(168, 218, 220);
    } else if (data[i].genre_1 == "action") {
      stroke(217,4,40);
    } else {// rom_com
      stroke(254, 153, 200);
    }
    // first flag of the note 
    noFill();
    strokeWeight(6);
    bezier(x_line, y_line, x_line+12.5, y_line-15, x_line+37.5, y_line+15, x_line+50, y_line);
    
    // Color according to the Genre for the second genre
    if (data[i].genre_2 == "action") {
      stroke(217,4,40);
    } else if (data[i].genre_2 == "love_story") {
      stroke(251,86,7); 
    } else { //thriller
      stroke(140, 154, 174);
    }
    // second flag of the note
    noFill();
    strokeWeight(6);
    translate(0, 20);
    bezier(x_line, y_line, x_line+12.5, y_line-15, x_line+37.5, y_line+15, x_line+50, y_line);
    translate(0, -20);
     
}
}
// Function to create the figures for the second half
// repetition of the steps above
function drawSquare2() {
  
  // 5 squares for first 5 movies
  for (let j = 5; j < 10; j++) {
    
    let x_origin = 1.5*(j-5)*100 + 100
    
    fill(0);
    textSize(20);
    strokeWeight(0);
    text(data[j].Music_Director, x_origin-20, 320);
    
    strokeWeight(2);
    fill(0);
    stroke(0);
    let radius = data[j].Years_Active*2+20
    circle(x_origin-radius/2, 430-radius/4, radius);
    
    let x_line = x_origin
    let y_line = 360-map(data[j].ProfitFactor, 1.4, 2.4, 0, 1000)/20;
    stroke(0);
    line(x_origin, 430, x_line, y_line);
    
    // Color according to the Genre
    if (data[j].genre_1 == "drama") {
      stroke(168, 218, 220);
    } else {
      stroke(33, 69, 196); // comedy
    }
    noFill();
    strokeWeight(6);
    bezier(x_line, y_line, x_line+12.5, y_line-15, x_line+37.5, y_line+15, x_line+50, y_line);
    
    // Color according to the Genre
    if (data[j].genre_2 == "thriller") {
      stroke(140, 154, 174);
    } else if (data[j].genre_2 == "rom_com") {
      stroke(254, 153, 200);
    } else if (data[j].genre_2 == "love_story") {
      stroke(251,86,7); 
    } else { //comedy
      stroke(33, 69, 196);
    }
    noFill();
    strokeWeight(6);
    translate(0, 20);
    bezier(x_line, y_line, x_line+12.5, y_line-15, x_line+37.5, y_line+15, x_line+50, y_line);
    translate(0, -20);
    
  }
  
}

// the note for the legend
function legends(){
  strokeWeight(3);
  stroke(0);
  line(990, 350, 990, 250);
  fill(0);
  circle(990-10, 350-20/4, 20);
  
  noFill();
  bezier(990, 250, 1020, 220, 1045, 280, 1070, 250);
  translate(0, 20);
  bezier(990, 250, 1020, 220, 1045, 280, 1070, 250);
  translate(-5, 20);
}

