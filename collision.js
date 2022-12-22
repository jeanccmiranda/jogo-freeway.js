function collisionVerifier(){
  for (let i = 0; i < carsImg.length; i++){
    collision = collideRectCircle(carsPositionX[i], carsPositionY[i], carWidth, carHeight, playerPositionX, playerPositionY, 15)
    if (collision){
      playerPositionY = 380;
      collisionSound.play();
      if (score > 0){
        score -= 1;
      }
    }
  }
}