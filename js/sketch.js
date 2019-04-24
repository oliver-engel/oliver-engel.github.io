/*
* P5.JS TREBUCHET
* BY OLIVER ENGEL
* oliverengel.com
*/


/*
P5.js setup code was sourced from these links:
https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/
https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/
*/

var serial;   // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem144401';    // fill in your serial port name here
var inData;   // variable to hold the input data from Arduino

var projectile = true;
var sunMoon = "sun";
var constrained;

let transparency = 255;
let cloud_1_x = 0;
let dim = 80.0;
var armSwing;

let medievalSong;
let challengeSong;

var safetyCount = 0;



function setup() {

  //set up canvas
  var widthParent = document.getElementById('trebuchet-animation-holder').offsetWidth;
  var heightParent = document.getElementById('trebuchet-animation-holder').offsetHeight;

  var canvas = createCanvas(widthParent, 450);
  canvas.parent('trebuchet-animation-holder');
  angleMode(DEGREES);
  noStroke();

  //images
  support = loadImage('assets/interface/support.png');
  arm = loadImage('assets/interface/arm.png');
  weight = loadImage('assets/interface/weight.png');
  ready = loadImage('assets/interface/ready.png');
  ball = loadImage('assets/interface/ball.png');
  cloud_1 = loadImage('assets/interface/cloud-1.png');
  sun = loadImage('assets/interface/sun.png');
  moon = loadImage('assets/interface/moon.png');

  medieval = loadImage('assets/interface/moon.png');


}

// Ball positions
var ballX = 465;
var ballY = -100;
let alpha = 0;

// Background color of the sketch, will change based on mode
let bgColor = '#EC603E';

let angle=0;

// This var appends a new chart when the projectile is launched.
var chartAppended = false;

// Main loop
function draw() {

  // Set background color
  background(bgColor);
  smooth(0);

  // THE SUN
  push();
  scale(.35);
    imageMode(CENTER);
    if(bgColor == '#EC603E'){
      image(sun,700,300);
    }
    else{
      blendMode(SCREEN);
      image(moon,700,300);
    }
  pop();

  // Make the drifting cloud
  push();
    // Change the + ___ value to shift speed
    cloud_1_x = cloud_1_x + 0.8;
    // Resetting the cloud
    if (cloud_1_x > 3500) {
      cloud_1_x = -600;
    }
    scale(.35);
    translate(cloud_1_x, height / 2 - dim / 2);
    blendMode(SCREEN);
    image(cloud_1, -600, 150);
  pop();



  push();



  pop();


  // Get the angle; for Arduino-less testing, change inData to mouseX.
  // If you have the arduino set up, change mouseX to inData'.
  // Change the last variable to calibrate the resting position of the arm.
  var angle = map(mouseX, 0, width/2, 45, 180);

  var controlPotentialEnergy = map(angle, 45, 180, .1, 1);
  constrained = constrain(controlPotentialEnergy, 0, 1);

  // console.log(constrained);

  // Scale and translate the whole thing
  // Use this to position the trebuchet
  scale(.4);
  translate(690,375);

  push();
      // Set the position
      translate(575,285);

      // Keep the arm between 45 and 270 degrees
      armSwing = constrain(angle, 45, 270);

      // Rotating the arm
      rotate(-armSwing + 90);

      // If the arm is less than 180 degrees, and hasn't been launched yet...
      if(armSwing < 180 && projectile == true){
        image(ball,ballX,ballY);
      }

      // If the arm passes 180
      else if(armSwing > 180){

        // Can't fire again until reloaded
        projectile = false;
        // Add a motion trail
        background(34, 36, 43, 1);
        // Rate of firing
        ballX += 100;

        //Animate the ball
        push();
          rotate(random(1));
          imageMode(CENTER);
          image(ball,ballX,ballY);
        pop();
      }


      // Resetting the ball
      else if(armSwing < 46){

        safetyCount++;
        console.log(safetyCount);

        projectile = true;
        chartAppended = false;

        ballX = 465;
        ballyY = -100;
        image(ball,ballX,ballY);

      }

      // Draw the arm
      image(arm, -143, -50);
      translate(-115,0);

      // Rotating the arm based on sensor input
      rotate(armSwing-90);

      // Draw the weight
      imageMode(CENTER);
      image(weight,0,75);

      // Do stuff when the arm hits 190 degrees

  pop();

  //Draw the support
  image(support, 212, 225);

  //Draw "ready" message
  if(armSwing < 50){
    //Set the position
    translate(360,750);
    push();
      //Altering transparency over time
      tint(255, transparency);
      transparency-=3;
      scale(.75);
      image(ready, 0,0);

      //If transparent, reset
      if(transparency < 1){
        transparency=255;
      }
    pop();
  }
}


// DONT TOUCH THIS
// Following functions print the serial communication status to the console for debugging purposes

function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 // print(i + " " + portList[i]);
 }
}

function serverConnected() {
  print('connected to server.');
}

function portOpen() {
  print('the serial port opened.')
}

// Where the Arduino data comes in
function serialEvent() {

  // read a string from the serial port:
  var inString = serial.readLine();
  // check to see that there's actually a string there:
  if (inString.length > 0 ) {
    // convert it to a number:
    inData = Number(inString);
    // print(inData);

    // This calculates the kinetic energy readings.
    energyListen();
  }
}

function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}

function portClose() {
  print('The serial port closed.');
}
