function setup() {
  noLoop();
  createCanvas(800, 800);
  background(255);
  textFont("Trebuchet MS");
}
// Call the functions
function draw() {
  chartTitle();
  figures1();
  figures2();
  // drawSquare2();
  
}
// Function to create the chart title
function chartTitle() {
  fill(0);
  textSize(30);
  strokeWeight(0);
  textAlign(LEFT);
  text("If you spent 3rd August 2022 in any of these cities,", 50, 50);
  text("here's the number of cigarettes you smoked. ", 50, 90);
}


function figures1(){
  let cities1 = ["New Delhi", "Mumbai", "Kolkata", "Chennai", "Bangalore"];
  let lat1 = [29, 19, 23, 13, 13];
  let long1 = [77, 73, 88, 80, 78];
  
  for (let i = 0; i < 5; i++){
    
   // textSize(15);
   // text(cities1[i], 50, 150);

    let url = "https://api.openweathermap.org/data/2.5/air_pollution?lat="+lat1[i]+"&lon="+long1[i]+"&appid=ddb8494670dc8c1c4ab5a373f0dd1317";
    
    loadJSON(url, create_obj);
    //console.log("1");
    //console.log("4");
    //console.log(pm);
    //
    
  }
}
function create_obj(data_pollution){
  //console.log("2");
  pm = data_pollution.list[0].components.pm2_5;
  
  //console.log("3");
  
  let x = 50;
  let y = 160;
    
  fill(230, 170, 32);
  rect(x, y, 30, 15);
  fill(240, 240, 240);
  rect(x+30, y, 60, 15);
  fill(245, 86, 7);
  rect(x+90, y, 10, 15);
  
  translate(0, 25);

  let count = 1;
  pm = pm - 22;

  while (pm >22){
    fill(230, 170, 32);
    rect(x, y, 30, 15);
    fill(240, 240, 240);
    rect(x+30, y, 60, 15);
    fill(245, 86, 7);
    rect(x+90, y, 10, 15);
    translate(0, 25);
    pm = pm - 22;
    count = count + 1;
  }
  //console.log(count);
  translate(150,-(25*count));
  
}
function figures2(){
  let cities2 = ["Hyderabad", "Ahmedabad", "Pune", "Vishakhapatnam", "Andhra Pradesh Capital Region"];
  let lat2 = [17, 23, 18, 18, 16];
  let long2 = [78, 73, 74, 83, 80];
  for (let j = 0; j < 5; j++){
    
   // textSize(15);
   // text(cities1[i], 50, 150);

    let url = "https://api.openweathermap.org/data/2.5/air_pollution?lat="+lat2[j]+"&lon="+long2[j]+"&appid=ddb8494670dc8c1c4ab5a373f0dd1317";
    
    loadJSON(url, create_obj2);
   // console.log("1");
   // console.log("4");
    //console.log(pm);
    //
    
  }
}
function create_obj2(data_pollution){
  //console.log("2");
  pm = data_pollution.list[0].components.pm2_5;
  
  console.log("3");
  
  let x = -700;
  let y = 450;
    
  fill(230, 170, 32);
  rect(x, y, 30, 15);
  fill(240, 240, 240);
  rect(x+30, y, 60, 15);
  fill(245, 86, 7);
  rect(x+90, y, 10, 15);
  
  translate(0, 25);

  let count = 1;
  pm = pm - 22;

  while (pm >22){
    fill(230, 170, 32);
    rect(x, y, 30, 15);
    fill(240, 240, 240);
    rect(x+30, y, 60, 15);
    fill(245, 86, 7);
    rect(x+90, y, 10, 15);
    translate(0, 25);
    pm = pm - 22;
    count = count + 1;
  }
  console.log(count);
  translate(150,-(25*count));
  
}
