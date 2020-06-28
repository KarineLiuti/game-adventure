class Game {
  constructor() {
    this.currentIndexOfMapGame = 0;

    this.mapGame = [
      {
        enemy: WATER_DROP,
        speedObject: 10
      },
      {
        enemy: TROLL,
        speedObject: 8
      },
      {
        enemy: TROLL,
        speedObject: 6
      },
      {
        enemy: FLYING_WATER_DROP,
        speedObject: 20
      },
    ]
  }

  setup() {
    scenario = new Scenario(scenarioImage, 3);
    character = new Character(matrixCharacter, characterImage, 0, 25, 110, 135, 220, 270, jumpSound);
    const enemy = new Enemy(enemyMatrix, enemyImage, width - 50, 30, 52, 52, 104, 104, 12, 100);
    const trollEnemy = new Enemy(trollEnemyMatrix, trollEnemyImage, width, 10, 200, 200, 400, 400, 10, 100);
    const flyingWaterDropEnemy = new Enemy(flyingWaterDropEnemyMatrix, flyingWaterDropEnemyImage, width + 500, 350, 100, 75, 200, 150, 20, 100);
    score = new Score();
    life = new Life(3, 3);

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

    life.draw();
    
    character.showElement();
    character.applyGravity();

    const currentObjectOfMapGame = this.mapGame[this.currentIndexOfMapGame];    
    const enemy = enemies[currentObjectOfMapGame.enemy];
    const isVisibleEnemy = enemy.x < -enemy.widthObject;

    score.show();
    score.addScore();
  
    enemy.speedEnemy = currentObjectOfMapGame.speedObject;
    enemy.showElement();
    enemy.move();
  
    if(isVisibleEnemy) {
      this.currentIndexOfMapGame++;
      if(this.currentIndexOfMapGame > this.mapGame.length -1) {
        this.currentIndexOfMapGame = 0;
      }
      
    }
  
    if (character.isCollisionOn(enemy)) {
      life.loseLife();
      if(life.lifeQuantity <= 0) {
        image(gameOverImage, width/2 - 200, height/3);
        noLoop()
      }
    };
  
  }

}