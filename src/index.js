document.addEventListener("DOMContentLoaded", () => {
  window.onload = function() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const pitchZero = new Image();
    pitchZero.src = './assets/pitch/pitch_0.png';
    ctx.drawImage(pitchZero, 0, 0);
  
    const pitchOne = new Image();
    pitchOne.src = './assets/pitch/pitch_1.png';
    ctx.drawImage(pitchOne, 336, 0);
  
    const pitchTwo = new Image();
    pitchTwo.src = './assets/pitch/pitch_2.png';
    ctx.drawImage(pitchTwo, 672, 0);
  
    const pitchThree = new Image();
    pitchThree.src = './assets/pitch/pitch_3.png';
    ctx.drawImage(pitchThree, 1008, 0);

    const playerOneImage = new Image();
    playerOneImage.src = './assets/players/player1.png';
    ctx.drawImage(playerOneImage, 500, 500)
    
  };

  const player1 = {
    speed: 500,
    x: 500,
    y: 500
  }

  window.onload();
});


