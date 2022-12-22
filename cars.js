let carsPositionX = [450, 450, 450, 450, 450, 450];
let carsPositionY = [40, 95, 150, 210, 260, 320];
let minimumSpeed = 2;
let dificulty = 5;
let carsSpeed = 
    [ Math.random() * dificulty + minimumSpeed, 
     Math.random() * dificulty + minimumSpeed,
     Math.random() * dificulty + minimumSpeed,
     Math.random() * dificulty + minimumSpeed,
     Math.random() * dificulty + minimumSpeed,
     Math.random() * dificulty + minimumSpeed];
let carWidth = 50;
let carHeight = 40;


function carsDisplay(){
  for (let i = 0; i < carsImg.length; i++){
    image(carsImg[i], carsPositionX[i], carsPositionY[i], carWidth, carHeight);
  }
}

function carsMovement(){
  for (let i = 0; i < carsImg.length; i++){
    
    carsPositionX[i] -= carsSpeed[i];
    if(carsPositionX[i] < -50){
      carsPositionX[i] = 500;
      carsSpeed[i] = Math.random() * 10 + minimumSpeed;
      
    }
    
  }

}


