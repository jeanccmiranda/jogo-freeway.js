function preload(){
  backgroundImg = loadImage("img/background.png");
  playerImg = loadImage("img/player.png");
  car1Img = loadImage("img/car1.png");
  car2Img = loadImage("img/car2.png");
  car3Img = loadImage("img/car3.png");
  collisionSound = loadSound("sounds/collision.mp3");
  musicSound = loadSound("sounds/music.mp3");
  scoreSound = loadSound("sounds/score.wav");
  carsImg = [car1Img, car2Img, car3Img,car1Img, car2Img, car3Img];
}

function setup() {
  createCanvas(500, 400);
  musicSound.loop();
  
}

function draw() {
  background(backgroundImg);
  playerDisplay();
  carsDisplay();
  scoreDisplay();
  playerMovement();
  carsMovement();
  scoreCounter();
  dificultyVerifier();
  collisionVerifier();
}