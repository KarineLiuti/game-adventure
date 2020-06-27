class Game {
  constructor() {
    this.currentEnemy = 0;
  }

  setup() {
    scenario = new Scenario(scenarioImage, 3);
    character = new Character(matrixCharacter, characterImage, 0, 25, 110, 135, 220, 270, jumpSound);
    const enemy = new Enemy(enemyMatrix, enemyImage, width - 50, 30, 52, 52, 104, 104, 12, 100);
    const trollEnemy = new Enemy(trollEnemyMatrix, trollEnemyImage, width, 10, 200, 200, 400, 400, 10, 100);
    const flyingWaterDropEnemy = new Enemy(flyingWaterDropEnemyMatrix, flyingWaterDropEnemyImage, width + 500, 350, 100, 75, 200, 150, 20, 100);
    score = new Score();

    enemies.push(enemy)
    enemies.push(trollEnemy)
    enemies.push(flyingWaterDropEnemy)
  }

  keyPressed(key){
    if(key == 'ArrowUp') {
      character.jumpCharacter();
      jumpSound.play();
    }
  }

  draw() {
    scenario.show();
    scenario.move();
    
    character.showElement();
    character.applyGravity();
    
    score.show();
    score.addScore();
    
    const enemy = enemies[this.currentEnemy];
    const isVisibleEnemy = enemy.x < -enemy.widthObject;
  
    enemy.showElement();
    enemy.move();
  
    if(isVisibleEnemy) {
      this.currentEnemy++;
      if(this.this.currentEnemy > enemies.length -1) {
        this.currentEnemy = 0;
      }
      enemy.speedEnemy = parseInt(random(8, 15));
    }
  
    if (character.isCollisionOn(enemy)) {
      image(gameOverImage, width/2 - 200, height/3);
      console.log('crashed')
      // noLoop()
    };
  
  }

}