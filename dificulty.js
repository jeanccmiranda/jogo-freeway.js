function dificultyVerifier(){
  if(score > 3 && score < 7){
    fill(240, 230, 140)
    text('DIFICULTY: MEDIUM', 50, 25);
    minimumSpeed = 2;
  }
  
  else if(score > 6){
    fill(222, 49, 99)
    text('DIFICULTY: HARD', 50, 25);
    minimumSpeed = 3;
  }
  
  else{
    fill( 0, 255, 0)
    text('DIFICULTY: EASY', 50, 25);
    minimumSpeed = 1;
  }
}