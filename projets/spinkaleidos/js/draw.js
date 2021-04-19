/*let img; 
let x = 0;
let freqY = 0.015;
let amplitudeY = 100;
let xStep = 1;

function setup() {
  createCanvas(900, 600);
  background(0);
  img = loadImage("John-Jones.png"); // change image here
 // img.resize(img.width/2, img.height/2); // scale if necessary.
  imageMode(CENTER);
}

function draw() {
  //background(0);
  var y = sin(frameCount*freqY) * amplitudeY;
  var angle = sin(frameCount*0.015) * 360;
  push();
  translate(x, height/2 + y);
  rotate(radians(angle));
  image(img, 0, 0, 175, 175);
  pop();
  x = x + xStep;
  if (x>width+200) {
   // saveFrame("TR_SPIN_###.png");
    background(0);
    x = 0-200;
    freqY = random(0.001, 0.15);
    amplitudeY = random(50, 300);
    xStep = random(1, 10);
  }

}*/

/* 
 --------------------------
 ** PLEASE READ INFO TAB **
 --------------------------
 */

/////////////////////////// GLOBAL ////////////////////////////
let img;
let x = 0;
let y = 0;
let freqY = 0.015;
let amplitudeY = 100;
let xStep = 1;
let miroir = 10; // Carcan du kaléidoscope, valeur du nombre de reflets, modifiable
let angle = 360 / miroir;
let angle2 = 0;
let i = 0;
let wheel_count = 0;
let wheel_step = 1; //fast scroll
let scale_init = 1;

/*
function keyDown(e) {
    let key = e.which || e.keyCode;

    if (key === 67) {
        document.addEventListener('wheel', zoom);
    }
}

function keyUp(e) {
    let key = e.which || e.keyCode;

    if (key === 67) {
        document.removeEventListener('wheel', zoom);
    }
}*/

function zoom(e) {
    if (e.deltaY < 0) {
        wheel_count++;
        if (wheel_count === wheel_step) {
            wheel_count = 0;
            incrementMiroir();
        }
    } else if (e.deltaY > 0 && miroir > 1) {
        wheel_count++;
        if (wheel_count === wheel_step) {
            wheel_count = 0;
            decrementMiroir();
        }
    }
}

function incrementMiroir() {
    miroir++;
    angle = 360 / miroir
}

function decrementMiroir() {
    miroir--;
    angle = 360 / miroir
}

/////////////////////////// SETUP ////////////////////////////
function setup() {
    /*document.addEventListener('keydown', keyDown);
    document.addEventListener('keyup', keyUp);*/
	document.addEventListener('wheel', zoom);
    document.getElementById('add_carcan').addEventListener('click', incrementMiroir);
    document.getElementById('remove_carcan').addEventListener('click', decrementMiroir);

    createCanvas(window.innerWidth,window.innerHeight);
    rotate(360);
    background(0);
    let image = findGetParameter('image');
    console.log(image);
    if (image !== null) {
        img = loadImage(image);
    } else {
        img = loadImage("../img/John-Jones.png"); // change image here
    }
    // img.recreateCanvas(img.width/2, img.height/2); // scale if necessary.
    imageMode(CENTER);

}

/////////////////////////// DRAW ////////////////////////////
function draw() {
    // background(0);
    y = sin(frameCount * freqY) * amplitudeY;
    angle2 = sin(frameCount * 0.015) * 360;
    /*if (key === 's') {
        saveFrame("TR_SPIN_###.png");
        // background(0);
    }
    if (key === 'd') {
        angle2 += 5; // fait tourner kaleidos (zone de dessin)
        kaleidos();
    }*/
    document.getElementById('carcan').innerHTML = miroir;
    kaleidos();
}

function kaleidos() {

    translate(width / 2, height / 2);
    rotate(radians(angle2));
    angle2 = 0;

    if (mouseIsPressed) {

        for (let i = 0; i < miroir; i++) {
            rotate(radians(angle));

            smooth();
            image(img, mouseX / 2, mouseY / 2, 175, 175);
            push();
            scale(1, -1);
            pop();
        }
    }
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}