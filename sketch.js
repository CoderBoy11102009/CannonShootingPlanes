//Variables
var cannon;
var plane;
var ball;
var balls = [];
var planes;

//Function preload
function preload() {

}

//Function setup
function setup() {

  //Canvas
  createCanvas(windowWidth, windowHeight);

  //creating the planes group
  planes = new Group();

  // Creating the sprites
  cannon = createSprite(windowWidth/2, windowHeight-100, 50,50);

}


function draw() {
  //Background
  background("skyblue")

  spawnPlanes();
  drawSprites();
}

function spawnPlanes() {
  if (frameCount%60 === 0) {
    plane = createSprite(0, windowHeight-700, 60,60);
    plane.velocityX = 10;
    plane.addImage();
    planes.add(plane);
  }
}


