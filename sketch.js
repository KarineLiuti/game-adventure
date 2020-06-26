let scenarioImage;
let characterImage;
let scenario;
let gameSound;
let character;

function preload() {
  scenarioImage = loadImage('imagens/cenario/floresta.png');
  characterImage = loadImage('imagens/personagem/correndo.png');
  gameSound = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(scenarioImage, 3);
  character = new Character(characterImage);
  frameRate(40);
  //gameSound.loop();
}

function draw() {
  scenario.show();
  scenario.move();
  character.show();
}

