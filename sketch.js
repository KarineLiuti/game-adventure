let scenarioImage;
let characterImage;
let scenario;
let gameSound;
let jumpSound;
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
const matrixCharacter = [
  [0, 0], 
  [220, 0], 
  [440, 0], 
  [660, 0], 
  [0, 270], 
  [220, 270], 
  [440, 270], 
  [660, 270], 
  [0, 540], 
  [220, 540], 
  [440, 540], 
  [660, 540], 
  [0, 810], 
  [220, 810], 
  [440, 810], 
  [660, 810]
];

function preload() {
  scenarioImage = loadImage('imagens/cenario/floresta.png');
  characterImage = loadImage('imagens/personagem/correndo.png');
  enemyImage = loadImage('imagens/inimigos/gotinha.png');
  gameSound = loadSound('sons/trilha_jogo.mp3');
  jumpSound = loadSound('sons/jump_sound.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(scenarioImage, 3);
  character = new Character(matrixCharacter, characterImage, 0, 110, 135, 220, 270);
  enemy = new Enemy(enemyMatrix, enemyImage, width - 50, 52, 52, 104, 104);
  frameRate(40);
  //gameSound.loop();
}

function keyPressed(){
  if(key == 'ArrowUp') {
    character.jumpCharacter();
    jumpSound.play();
  }
}

function draw() {
  scenario.show();
  scenario.move();
  
  character.showElement();
  character.applyGravity();
  
  enemy.showElement();
  enemy.move();

  if (character.isCollisionOn(enemy)) noLoop();
}

