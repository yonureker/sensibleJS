document.addEventListener("DOMContentLoaded", () => {
  window.onload = function() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const playerOneImage = new Image();
    playerOneImage.src = './assets/players/player1.png';
    ctx.drawImage(playerOneImage, 500, 500)

    let playerTwoImage = new Image();
    playerTwoImage.src = './assets/players/player1.png';
    ctx.drawImage(playerOneImage, 600, 800)
  };

  window.onload();
});


