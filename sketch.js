let scenarioImage;
let characterImage;
let scenario;
let gameSound;
let character;
let enemy;
const enemyMatrix = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]

function preload() {
  scenarioImage = loadImage('imagens/cenario/floresta.png');
  characterImage = loadImage('imagens/personagem/correndo.png');
  enemyImage = loadImage('imagens/inimigos/gotinha.png');
  gameSound = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(scenarioImage, 3);
  character = new Character(characterImage);
  enemy = new Enemy(enemyMatrix, enemyImage, width - 50, 52, 52, 104, 104);
  frameRate(40);
  //gameSound.loop();
}

function draw() {
  scenario.show();
  scenario.move();
  
  character.show();
  
  enemy.showElement();
  enemy.move();

}

