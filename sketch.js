let scenarioImage;
let characterImage;
let scenario;
let gameSound;
let gameOverImage;
let jumpSound;
let character;
const enemies = [];
let score;

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
const trollEnemyMatrix = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]
const flyingWaterDropEnemyMatrix = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

function preload() {
  scenarioImage = loadImage('imagens/cenario/floresta.png');
  characterImage = loadImage('imagens/personagem/correndo.png');
  enemyImage = loadImage('imagens/inimigos/gotinha.png');
  flyingWaterDropEnemyImage = loadImage('imagens/inimigos/flying-water-drop.png');
  trollEnemyImage = loadImage('imagens/inimigos/troll.png');
  enemyImage = loadImage('imagens/inimigos/gotinha.png');
  gameOverImage = loadImage('imagens/assets/game-over.png');
  gameSound = loadSound('sons/trilha_jogo.mp3');
  jumpSound = loadSound('sons/jump_sound.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(scenarioImage, 3);
  character = new Character(matrixCharacter, characterImage, 0, 25, 110, 135, 220, 270, jumpSound);
  const enemy = new Enemy(enemyMatrix, enemyImage, width - 50, 30, 52, 52, 104, 104, 8, 1000);
  const trollEnemy = new Enemy(trollEnemyMatrix, trollEnemyImage, width, 10, 200, 200, 400, 400, 8, 2000);
  const flyingWaterDropEnemy = new Enemy(flyingWaterDropEnemyMatrix, flyingWaterDropEnemyImage, width + 500, 350, 100, 75, 200, 150, 10, 20);
  score = new Score();;

  enemies.push(enemy)
  enemies.push(trollEnemy)
  enemies.push(flyingWaterDropEnemy)

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

  score.show();
  score.addScore();

  enemies.forEach(enemy => {
    enemy.showElement();
    enemy.move();

    if (character.isCollisionOn(enemy)) {
      image(gameOverImage, width/2 - 200, height/3);
      console.log('crashed')
      noLoop()
    };
  })

}

