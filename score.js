let score = 0;



function scoreDisplay(){
  textSize(20);
  fill(0, 0, 0);
  text("SCORE:  " + score , width / 2, 25);
  
  
}

function scoreCounter(){
  if(playerPositionY < 5){
    scoreSound.play();
    playerPositionY = 360;
    score += 1;
  }
}