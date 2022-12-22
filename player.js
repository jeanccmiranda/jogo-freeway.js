let playerPositionX = 250;
let playerPositionY = 370;
let playerWidth = 30;
let playerHeight = 30;




function playerDisplay(){
  image(playerImg, playerPositionX, playerPositionY, playerWidth, playerHeight)
}

function playerMovement(){
  if(keyIsDown(83) && playerPositionY < 370){
    playerPositionY += 5;
  }
  
  if(keyIsDown(87)){
    playerPositionY -= 5;
  }
  
  if(keyIsDown(65) && playerPositionX > 0){
    playerPositionX -= 5;
  }
  
  if(keyIsDown(68) && playerPositionX < 470){
    playerPositionX += 5;
  }
  
}