//import com.hamoid.*;

//VideoExport videoExport;
/* 
 --------------------------
 ** PLEASE READ INFO TAB **
 --------------------------
 */

/////////////////////////// GLOBAL ////////////////////////////
let img; 
let y = 0;
let freqY = 0.015;
let amplitudeY = 100;
let xStep = 1;

let img2; 
let y2 = 0;
let freqY2 = 0.05;
let amplitudeY2 = 50;
let xStep2 = 5;

let img3; 
let y3 = 0;
let freqY3 = 0.025;
let amplitudeY3 = 200;
let xStep3 = 3;

/////////////////////////// SETUP ////////////////////////////
function setup() {
  createCanvas(900, 600);
  rotate(360);
  background(0);
  img = loadImage("dude.png"); // change image here
  img2 = loadImage("dude.png"); // change image here
  img3 = loadImage("architect.png"); // change image here

  img.recreateCanvas(img.width/2, img.height/2); // scale if necessary.
  imageMode(CENTER);
  
  //videoExport = new VideoExport(this, 900, 600);
  //videoExport.startMovie();
}

/////////////////////////// DRAW ////////////////////////////
function draw() {
  //background(0);
  let x = sin(frameCount*freqY) * amplitudeY;
  let angle = sin(frameCount*0.015) * 360;
  push();
  translate(height/0.85 + x, y);
  rotate(radians(angle));
  image(img, 0, 0, 100, 100);
  pop();
  y = y + xStep;
  if (mouseIsPressed) {
    saveFrame("TR_SPIN_###.png");
  //  background(0);
    y = 0-200;
    freqY = random(0.001, 0.15);
    amplitudeY = random(20, 100);
    xStep = random(1, 10);
  }
  let x2 = sin(frameCount*freqY2) * amplitudeY2;
  let angle2 = sin(frameCount*0.015) * 360;
  push();
  translate(height/4 + x2, y2);
  rotate(radians(angle2));
  image(img2, 0, 0, 100, 100);
  pop();
  y2 = y2 + xStep2;
  if (mouseIsPressed) {
    saveFrame("TR_SPIN_###.png");
 //   background(0);
    y2 = 0-200;
    freqY2 = random(0.001, 0.15);
    amplitudeY2 = random(20, 100);
    xStep2 = random(1, 10);
  }
  let x3 = sin(frameCount*freqY3) * amplitudeY3;
  let angle3 = sin(frameCount*0.015) * 360;
  push();
  translate(height/2 + x3, y3);
  rotate(radians(angle3));
  image(img3, 0, 0, 50, 100);
  pop();
  y3 = y3 + xStep3;
  if (mouseIsPressed) {
    saveFrame("TR_SPIN_###.png");
    background(0);
    y3 = 0-200;
    freqY3 = random(0.001, 0.15);
    amplitudeY3 = random(20, 100);
    xStep3 = random(1, 10);
  }
  // videoExport.saveFrame();
}

/*function keyPressed() {
  if (key == 'q') {
    videoExport.endMovie();
    exit();
  }
}*/