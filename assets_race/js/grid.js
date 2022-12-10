import C1 from "./Characters.js";
import Enemy from "./Enemy.js";
import Enemy2 from "./Enemy2.js";
import Enemy3 from "./Enemy3.js";
import Enemy4 from "./Enemy4.js";

export default class TileMap {

  constructor(tileSize) {
    this.tileSize = tileSize;

    //REFERENCIAÇÃO BLOCOS PISTA
    this.Base = new Image();
    this.Base.src = "./assets_race/img/corrida/fundo/base.png";

    this.BaseTurn = new Image();
    this.BaseTurn.src = "./assets_race/img/corrida/fundo/baseturn.png";

    this.RightUpTurn = new Image();
    this.RightUpTurn.src = "./assets_race/img/corrida/fundo/rightupturn.png";

    this.LeftUpTurn = new Image();
    this.LeftUpTurn.src = "./assets_race/img/corrida/fundo/leftupturn.png";

    this.RightDownTurn = new Image();
    this.RightDownTurn.src = "./assets_race/img/corrida/fundo/rightdownturn.png";

    this.LeftDownTurn = new Image();
    this.LeftDownTurn.src = "./assets_race/img/corrida/fundo/leftdownturn.png";

    this.Finish = new Image();
    this.Finish.src = "./assets_race/img/corrida/fundo/finish.png";

    this.Start = new Image();
    this.Start.src = "./assets_race/img/corrida/fundo/start.png";
    //
  }

//ARRAY MAPA//

map = [
[2, 1, 3],
[0,'', 0],
[0,'', 0],
[0,'', 0],
[0,'', 0],
[0,'', 0],
[0,'', 0],
[0,'', 0],
[6,'', 0],
[8,'', 0],
[9,'', 0],
[10,'',0],
[11,'',0],
[12,'',0],
[4, 1, 5]
];


  //CRIAÇÃO PISTA
  draw(ctx) {
    for (let row = 0; row < this.map.length; row++) {

      for (let column = 0; column < this.map[row].length; column++) {
        let tile = this.map[row][column];
        switch (tile) {
          case 0:
          this.#drawBase(ctx, column, row, this.tileSize);
          break;
          case 1:
            this.#drawBaseTurn(ctx, column, row, this.tileSize);
          break;
          case 2:
            this.#drawRightUpTurn(ctx, column, row, this.tileSize);
            break;
          case 3:
            this.#drawLeftUpTurn(ctx, column, row, this.tileSize);
            break;
          case 4:
            this.#drawRightDownTurn(ctx, column, row, this.tileSize);
            break;
            case 5:
            this.#drawLeftDownTurn(ctx, column, row, this.tileSize);
            break;
            case 6:
            this.#drawFinish(ctx, column, row, this.tileSize);
            break;
            case 7:
            this.#drawStart(ctx, column, row, this.tileSize);
            break;
        }
      }
    }
  }
//
  //CRIAÇÃO PEÇAS PISTA
  #drawBase(ctx, column, row, size) {
    ctx.drawImage(
      this.Base,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }
  #drawBaseTurn(ctx, column, row, size) {
    ctx.drawImage(
      this.BaseTurn,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }
  #drawRightUpTurn(ctx, column, row, size) {
    ctx.drawImage(
      this.RightUpTurn,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }
  #drawLeftUpTurn(ctx, column, row, size) {
    ctx.drawImage(
      this.LeftUpTurn,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }
  #drawRightDownTurn(ctx, column, row, size) {
    ctx.drawImage(
      this.RightDownTurn,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }
  #drawLeftDownTurn(ctx, column, row, size) {
    ctx.drawImage(
      this.LeftDownTurn,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }
  #drawFinish(ctx, column, row, size) {
    ctx.drawImage(
      this.Finish,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }
  #drawStart(ctx, column, row, size) {
    ctx.drawImage(
      this.Start,
      column * this.tileSize,
      row * this.tileSize,
      size,
      size
    );
  }
//
  //CRIAÇÃO INIMIGOS
  getEnemies(velocity) {
    const enemies = [];
    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        const tile = this.map[row][column];
        if (tile == 8) {
          this.map[row][column] = 7;
          enemies.push(
            new Enemy(
              column * this.tileSize,
              row * this.tileSize,
              this.tileSize * 1,
              velocity,
              this
            )
          );
        }
        if (tile == 9) {
          this.map[row][column] = 7;
          enemies.push(
            new Enemy2(
              column * this.tileSize,
              row * this.tileSize,
              this.tileSize * 1,
              velocity,
              this
            )
          );
        }
        if (tile == 11) {
          this.map[row][column] = 7;
          enemies.push(
            new Enemy3(
              column * this.tileSize,
              row * this.tileSize,
              this.tileSize * 1,
              velocity,
              this
            )
          );
        }
        if (tile == 12) {
          this.map[row][column] = 7;
          enemies.push(
            new Enemy4(
              column * this.tileSize,
              row * this.tileSize,
              this.tileSize * 1,
              velocity,
              this
            )
          );
        }
      }
    }
    return enemies;
  }
//

  //CRIAÇÃO PLAYER
  getC1(velocity) {
    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        let tile = this.map[row][column];
        if (tile === 10) {
          this.map[row][column] = 7;
          return new C1(
            column * this.tileSize,
            row * this.tileSize,
            this.tileSize * 1,
            velocity,
            this
          );
        }
      }
    }
  }
//
  //TAMANHO PISTA RELAÇÃO TELA
  setCanvasSize(canvas) {
    canvas.width = this.map[0].length * this.tileSize;
    canvas.height = this.map.length * this.tileSize;
  }
}
//

