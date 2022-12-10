import { vencedor }  from "./Characters.js";
import TileMap from "./grid.js";


//JSON TESTE ICONE PLAYER
let player = [
  {
    "colonia": "2",
    "especie" :"was"
  }
]
//

//ALEATORIZAÇÃO ICONES PLAYERS


//RANDOM PLAYER


let cartaa1 = document.querySelector(".cartaa1");

let carta1 = Math.floor(Math.random() * 11) + 1;
cartaa1.src = "assets_race/img/cartas/" + carta1 + ".png"

//

let cartaa2 = document.querySelector(".cartaa2");

let carta2 = Math.floor(Math.random() * 11) + 1;
cartaa2.src = "assets_race/img/cartas/" + carta2 + ".png"

//

let cartaa3 = document.querySelector(".cartaa3");

let carta3 = Math.floor(Math.random() * 11) + 1;
cartaa3.src = "assets_race/img/cartas/" + carta3 + ".png"

//

let carta4 = Math.floor(Math.random() * 11) + 1;

//

let carta5 = Math.floor(Math.random() * 11) + 1;

// RANDOM MOLDURAS 

let moldura1 = document.querySelector(".icon110");
let moldura1random = Math.floor(Math.random() * 4) + 50;

moldura1.style.backgroundImage = "url(assets_race/img/corrida/icones/" + moldura1random + ".png)"

//

let moldura2 = document.querySelector(".icon18");
let moldura2random = Math.floor(Math.random() * 4) + 50;

moldura2.style.backgroundImage = "url(assets_race/img/corrida/icones/" + moldura2random + ".png)"

//

let moldura3 = document.querySelector(".icon16");
let moldura3random = Math.floor(Math.random() * 4) + 50;

moldura3.style.backgroundImage = "url(assets_race/img/corrida/icones/" + moldura3random + ".png)"

//

let moldura4 = document.querySelector(".icon14");
let moldura4random = Math.floor(Math.random() * 4) + 50;

moldura4.style.backgroundImage = "url(assets_race/img/corrida/icones/" + moldura4random + ".png)"

//

let moldura5 = document.querySelector(".icon12");
let moldura5random = Math.floor(Math.random() * 4) + 50;

moldura5.style.backgroundImage = "url(assets_race/img/corrida/icones/" + moldura5random + ".png)"



////

//RANDOM COLONIA ICONE
var colonias = ["bee","spi","blb","blh","but","sco","ant","lad","dra","man","mot","fly","mos","fle","fir","was"];
//
//RANDOM ICONE INIMIGO 1
let icon1Ins = colonias[Math.floor(Math.random() * 15) + 0]
let icon1Col = Math.floor(Math.random() * 4) +1;
//ICONE GERADO INIMIGO 1
let icone1 = carta1 + ".png";
//
//RANDOM ICONE INIMIGO 2
let icon2Ins = colonias[Math.floor(Math.random() * 15) + 0]
let icon2Col = Math.floor(Math.random() * 4) +1;
//ICONE GERADO INIMIGO 2
let icone2 = carta2 + ".png";
//
//RANDOM ICONE INIMIGO 3
let icon3Ins = colonias[Math.floor(Math.random() * 15) + 0]
let icon3Col = Math.floor(Math.random() * 4) +1;
//ICONE GERADO INIMIGO 3
let icone3 = carta4 + ".png";
//
//RANDOM ICONE INIMIGO 4
let icon4Ins = colonias[Math.floor(Math.random() * 15) + 0]
let icon4Col = Math.floor(Math.random() * 4) +1;
//ICONE GERADO INIMIGO 4
let icone4 = carta5 + ".png";
//
//RANDOM ICONE PLAYER TESTE
let iconJSON = JSON.stringify(player);
let iconPl = JSON.parse(iconJSON)
let iColonia
let iPlayer
let iconeplayer
//ICONE GERADO PLAYER




$(".ct1").on("click", ()=>{
  // iColonia = "5"
  // iPlayer = "fly"
  // iconeplayer = "i_"+ iColonia +"_"+ iPlayer + ".png"
  // corredor.src = "assets/img/corrida/giffs/5_fir_2.gif"
  iconeplayer = carta1 + ".png"
  corredor.src = "assets_race/img/corrida/giffs/" + carta1 + ".gif"
})

$(".ct2").on("click", ()=>{
  iColonia = "2"
  iPlayer = "was"
  iconeplayer = "i_"+ iColonia +"_"+ iPlayer + ".png"
  corredor.src = "assets_race/img/corrida/giffs/" + carta2 + ".gif"
})

$(".ct3").on("click", ()=>{
  iColonia = "5"
  iPlayer = "bee"
  iconeplayer = "i_"+ iColonia +"_"+ iPlayer + ".png"
  corredor.src = "assets_race/img/corrida/giffs/" + carta3 + ".gif"
})


let dir = 'assets_race/img/corrida/icones/'


//

//REFERENCIA HTML
let pista = document.querySelector(".bg_corrida");



let pistaparada = document.querySelector(".bg_corrida_parada");

let background = document.querySelector(".bg");

let resultado = document.querySelector(".modal2");

let randomico = document.querySelector(".random");

let corredor = document.querySelector(".runner");

let posit = document.querySelector('.posit')

let positionTxt = document.querySelector('.position-text')
//

//TAMANHO DO CUBO MINIMAPA
const tileSize = 32;
//

//VELOCIDADE INICIAL
let velocity = 2;
//

//REFERENCIA MAPA
const canvas = document.querySelector(".canvas");
//
//REFERENCIA PLAYERS
const ctx = canvas.getContext("2d");
//
//MINIMAPA
const tileMap = new TileMap(tileSize);
tileMap.setCanvasSize(canvas);
//

//INIMIGO
const enemies = tileMap.getEnemies(velocity);
//

//PLAYER
const cha = tileMap.getC1(velocity);
//

//FUNÇÃO MINIMAPA FUNCIONAR
function gameLoop() {
  if(vencedor == 1) {return}
  tileMap.draw(ctx)
  enemies.forEach((enemy) => enemy.draw(ctx));
  cha.draw(ctx);
//PLAYER LOCALIZAÇÃO GRID
  var charX = cha.x / 32
  var charY = cha.y / 32
  var charMD = cha.MovingDirection
  let posicao = 6
  var posIcon1
//
// INIMIGO 01 LOCALIZAÇÃO GRID
  var enemyX1 = enemies[0].x / 32
  var enemyY1 = enemies[0].y / 32
  var enemyMD1 = enemies[0].MovingDirection
  let enemyPOS1 = 6
  var posIcon2 
//
// INIMIGO 02 LOCALIZAÇÃO GRID
  var enemyX2 = enemies[1].x / 32
  var enemyY2 = enemies[1].y / 32
  var enemyMD2 = enemies[1].MovingDirection
  let enemyPOS2 = 6
  var posIcon3
//
// INIMIGO 03 LOCALIZAÇÃO GRID
  var enemyX3 = enemies[2].x / 32
  var enemyY3 = enemies[2].y / 32
  var enemyMD3 = enemies[2].MovingDirection
  let enemyPOS3 = 6
  var posIcon4
//
// INIMIGO 04 LOCALIZAÇÃO GRID
  var enemyX4 = enemies[3].x / 32
  var enemyY4 = enemies[3].y / 32
  var enemyMD4 = enemies[3].MovingDirection
  let enemyPOS4 = 6
  var posIcon5
//ARRAY LOCALIZAÇÕES//
var posJogadoresY =  [enemyY1,enemyY2,charY,enemyY3,enemyY4];
var posJogadoresX = [enemyX1,enemyX2,charX,enemyX3,enemyX4];
//

// POSIÇÃO JOGADOR
switch(charMD){
  case 0:
    posJogadoresY.forEach((enemy) => {if (charY < enemy && charY != enemy) {posicao++} if ( charY > enemy && charY != enemy) {posicao--}})
    break;
    case 1:
      posJogadoresY.forEach((enemy) => {if (charY > enemy && charY != enemy) {posicao++} if ( charY < enemy && charY != enemy) {posicao--}})
      break;
      case 2:
        posJogadoresX.forEach((enemy) => {if (charX < enemy  && charX != enemy)  {posicao++} if(charX > enemy && charX != enemy) {posicao--}})
        break;
        case 3:
          posJogadoresX.forEach((enemy) => {if (charX > enemy  && charX != enemy)  {posicao++} if(charX > enemy && charX != enemy) {posicao--}})
          break;
}
// POSIÇÃO INIMIGO 1
switch(enemyMD1){
  case 0:
    posJogadoresY.forEach((enemy) => {if (enemyY1 < enemy && enemyPOS1 < 10 && enemyY1 != enemy ) {enemyPOS1++} if (enemyY1 > enemy && enemyY1 != enemy) {enemyPOS1--}})
  break;
    case 1:
      posJogadoresY.forEach((enemy) => {if (enemyY1 > enemy && enemyPOS1 < 10 && enemyY1 != enemy) {enemyPOS1++} if (enemyY1 < enemy && enemyY1 != enemy) {enemyPOS1--}})
    break;
      case 2:
        posJogadoresX.forEach((enemy) => {if (enemyX1 < enemy && enemyPOS1 < 10 && enemyX1 != enemy) {enemyPOS1++} if (enemyX1 > enemy && enemyX1 != enemy) {enemyPOS1--}})
      break;
        case 3:
          posJogadoresX.forEach((enemy) => {if (enemyX1 > enemy && enemyPOS1 < 10 && enemyX1 != enemy) {enemyPOS1++} if (enemyX1 < enemy && enemyX1 != enemy) {enemyPOS1--}})
        break;
}
// POSIÇÃO INIMIGO 2
switch(enemyMD2){
  case 0:
    posJogadoresY.forEach((enemy) => {if (enemyY2 < enemy && enemyPOS2 < 10 && enemyY2 != enemy ) {enemyPOS2++} if (enemyY2 > enemy && enemyY2 != enemy) {enemyPOS2--}})
  break;
    case 1:
      posJogadoresY.forEach((enemy) => {if (enemyY2 > enemy && enemyPOS2 < 10 && enemyY2 != enemy) {enemyPOS2++} if (enemyY2 < enemy && enemyY2 != enemy) {enemyPOS2--}})
    break;
      case 2:
        posJogadoresX.forEach((enemy) => {if (enemyX2 < enemy && enemyPOS2 < 10 && enemyX2 != enemy) {enemyPOS2++} if (enemyX2 > enemy && enemyX2 != enemy) {enemyPOS2--}})
      break;
        case 3:
          posJogadoresX.forEach((enemy) => {if (enemyX2 > enemy && enemyPOS2 < 10 && enemyX2 != enemy) {enemyPOS2++} if (enemyX2 < enemy && enemyX2 != enemy) {enemyPOS2--}})
        break;
}
// POSIÇÃO INIMIGO 3
switch(enemyMD3){
  case 0:
    posJogadoresY.forEach((enemy) => {if (enemyY3 < enemy && enemyPOS3 < 10 && enemyY3 != enemy ) {enemyPOS3++} if (enemyY3 > enemy && enemyY3 != enemy) {enemyPOS3--}})
  break;
    case 1:
      posJogadoresY.forEach((enemy) => {if (enemyY3 > enemy && enemyPOS3 < 10 && enemyY3 != enemy) {enemyPOS3++} if (enemyY3 < enemy && enemyY3 != enemy) {enemyPOS3--}})
    break;
      case 2:
        posJogadoresX.forEach((enemy) => {if (enemyX3 < enemy && enemyPOS3 < 10 && enemyX3 != enemy) {enemyPOS3++} if (enemyX3 > enemy && enemyX3 != enemy) {enemyPOS3--}})
      break;
        case 3:
          posJogadoresX.forEach((enemy) => {if (enemyX3 > enemy && enemyPOS3 < 10 && enemyX3 != enemy) {enemyPOS3++} if (enemyX3 < enemy && enemyX3 != enemy) {enemyPOS3--}})
        break;
}
// POSIÇÃO INIMIGO 4
switch(enemyMD4){
  case 0:
    posJogadoresY.forEach((enemy) => {if (enemyY4 < enemy && enemyPOS4 < 10 && enemyY4 != enemy ) {enemyPOS4++} if (enemyY4 > enemy && enemyY4 != enemy) {enemyPOS4--}})
  break;
    case 1:
      posJogadoresY.forEach((enemy) => {if (enemyY4 > enemy && enemyPOS4 < 10 && enemyY4 != enemy) {enemyPOS4++} if (enemyY4 < enemy && enemyY4 != enemy) {enemyPOS4--}})
    break;
      case 2:
        posJogadoresX.forEach((enemy) => {if (enemyX4 < enemy && enemyPOS4 < 10 && enemyX4 != enemy) {enemyPOS4++} if (enemyX4 > enemy && enemyX4 != enemy) {enemyPOS4--}})
      break;
        case 3:
          posJogadoresX.forEach((enemy) => {if (enemyX4 > enemy && enemyPOS4 < 10 && enemyX4 != enemy) {enemyPOS4++} if (enemyX4 < enemy && enemyX4 != enemy) {enemyPOS4--}})
        break;
}
// NUMERO POSIÇÃO JOGADOR NA TELA
switch (posicao) {
  case 2:
    positionTxt.innerHTML =  '5'   
    break;
      case 4:
        positionTxt.innerHTML =  '4'
        break;
          case 6:
            positionTxt.innerHTML = '3'
            break;
              case 8:
                positionTxt.innerHTML = '2'
                break;
                case 10:
                  positionTxt.innerHTML = '1'
                  break;
}
// GERAÇÃO E ANIMAÇÃO ICONE JOGADORES
//PLAYER
  posIcon1 = document.querySelector('.icon1'+posicao)
  posIcon1.src = dir+iconeplayer
  posIcon1.style.boxShadow = '1px 1px 10px 5px #fff'
  posIcon1.style.zIndex = '5'
  posIcon1.style.borderRadius = '100px'
  posIcon1.style.transform = 'scale(1.25)'
  posIcon1.style.transition = 'all 1s'
  //01
  posIcon2 = document.querySelector('.icon1'+enemyPOS1)
  posIcon2.src = dir+icone1
  posIcon2.style.boxShadow = 'none'
  posIcon2.style.zIndex = '4'
  posIcon2.style.borderRadius = '100px'
  posIcon2.style.transform = 'scale(1.1)'
  posIcon2.style.transition = 'all 1s'
  //02
  posIcon3 = document.querySelector('.icon1'+enemyPOS2)
  posIcon3.src = dir+icone2
  posIcon3.style.boxShadow = 'none'
  posIcon3.style.zIndex = '4'
  posIcon3.style.borderRadius = '100px'
  posIcon3.style.transform = 'scale(1.09)'
  posIcon3.style.transition = 'all 1s'
  //03
  posIcon4 = document.querySelector('.icon1'+enemyPOS3)
  posIcon4.src = dir+icone3
  posIcon4.style.boxShadow = 'none'
  posIcon4.style.zIndex = '4'
  posIcon4.style.borderRadius = '100px'
  posIcon4.style.transform = 'scale(1.15)'
  posIcon4.style.transition = 'all 1s'
  //04
  posIcon5 = document.querySelector('.icon1'+enemyPOS4)
  posIcon5.src = dir+icone4
  posIcon5.style.boxShadow = 'none'
  posIcon5.style.zIndex = '4'
  posIcon5.style.borderRadius = '100px'
  posIcon5.style.transform = 'scale(1.07)'
  posIcon5.style.transition = 'all 1s'
  //
}


//FUNÇÃO CARREGADA AO PLAY
$(window).on("load", function () {
  $(".btn").on("click", function () {
    {
      
      superrandom();
      posit.style.opacity = '1'
      gameLoop();
      setTimeout(function () {
          // FPS //
        setInterval(gameLoop, 1000 / 30)
          //
          corredor.style.opacity = "1"
          pista.style.opacity = "1"
          pistaparada.style.opacity = "0"
          background.style.transition = "all 30s"
      }, 4500);
    }
  });
});
//

//FUNÇÃO FINALIZAÇÃO CORRIDA
function corrida () {
  if (vencedor == 1) {
    posit.style.opacity = '0'
    resultado.style.opacity = "1"
    resultado.style.zIndex = '100'
    corredor.style.opacity = "0"
    pista.style.opacity = "0"
    pistaparada.style.opacity = "1"
  }
}
//

//FUNÇÃO RELOAD APOS RECOMPENSA
$('.btn-end').on('click', function (){
  document.location.reload(true)
})
//

//VERIFICAÇÃO VENCEDOR
setInterval(corrida, 1000 / 500)
//

//COLOCAÇÃO PLAYER
export let resultadorandom = Math.floor(Math.random() * 5) + 1;
//

//FUNÇÃO CHAMADA MODAL APOS CORRIDA
export function superrandom() {
  switch (resultadorandom) {
    case 1:
      randomico.innerText = "Você chegou em primeiro";
      break;
    case 2:
      randomico.innerText = "Você chegou em segundo";
      break;
    case 3:
      randomico.innerText = "você chegou em terceiro";
      break;
    case 4:
      randomico.innerText = "você chegou em quarto";
      break;
    case 5:
      randomico.innerText = "você chegou em quinto";
      break;
  }
}
//

// console.log(randomico)
 console.log(resultadorandom)

