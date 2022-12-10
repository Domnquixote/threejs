import MovingDirection from "./move.js";
import { resultadorandom } from "./script.js";

export default class Enemy4 {
  constructor(x, y, tileSize, velocity, tileMap) {
    this.x = x;
    this.y = y;
    this.tileSize = tileSize;
    this.velocity = velocity;
    this.tileMap = tileMap;
    this.loadImages();
    this.MovingDirection = 0;
  }
  draw(ctx) {
    this.#move();
    ctx.drawImage(
      this.CharactersImages[this.CharactersImagesIndex],
      this.x,
      this.y,
      this.tileSize,
      this.tileSize
    );
  }
  loadImages() {
    this.normalEnemy = new Image();
    this.normalEnemy.src = "./assets_race/img/corrida/fundo/enemy.png";
    this.CharactersImages = [this.normalEnemy];
    this.CharactersImagesIndex = 0;
  }

  #move() {
    // localizacao na grid //
    let ypisilon = this.y / 32;
    let xis = this.x / 32;
    // aleatoriedade velocidade //
    let n = 0;
    switch (resultadorandom) {
      case 1:
        n = 0.3;
        break;
      case 2:
        n = 0.3;
        break;
      case 3:
        n = 0.35;
        break;
      case 4:
        n = 0.1;
        break;
      case 5:
        n = 0.25;
        break;
    }

//VERIFICAÇÃO PARA CURVAS MINIMAPA
if (ypisilon >= -1 && ypisilon <= 0) {
  this.MovingDirection = 3;
  this.velocity = 1.4 + n;
}
if (ypisilon >= 13.9 && ypisilon <= 14) {
  this.MovingDirection = 2;
  this.velocity = 1.6 + n;
}
if (xis >= -1 && xis <= 0 && ypisilon >= 13.9) {
  this.MovingDirection = 0;
  this.velocity = 0.5 + n;
  verify = 1
}
if (xis >= 2 && xis <= 2.1 && ypisilon <= 0.1) {
  this.MovingDirection = 1;
  this.velocity = 1.5 + n;
}
//inicio
if (xis >= -1 && xis <= 0 && ypisilon <= 10 && verify == 0) {
  this.velocity = 1.4
}
//
if (ypisilon >= -1 && ypisilon <= 0 && xis >=0.5) {
  this.velocity = 2.4 + n;
}
if (xis >= 2 && xis <= 2.1 && ypisilon <= 7) {
  this.velocity = 1.5 + n;
}
if (ypisilon >= 13.9 && ypisilon <= 14 && xis >= 1.5) {
  this.velocity = 1.3 + n;
}
    {
      switch (this.MovingDirection) {
        case MovingDirection.up:
          this.y -= this.velocity;
          break;
        case MovingDirection.down:
          this.y += this.velocity;
          break;
        case MovingDirection.left:
          this.x -= this.velocity;
          break;
        case MovingDirection.right:
          this.x += this.velocity;
          break;
      }
    }
  }
}

//VERIFICAÇÃO LINHA DE CHEGADA
let verify = 0
//
