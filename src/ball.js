const Player = require('./player');

export default class Ball{
  constructor(width, height, src, x, y) {
    this.width = width;
    this.height = height;
    this.image = new Image;
    this.image.src = src;
    this.x = x;
    this.y = y;
  }

  update() {
    ctx = myGameArea.context;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  move(){

  }

  
}