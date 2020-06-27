

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  //gameSound.loop();
  game = new Game();
  game.setup();
  currentScene = 'game';
}

function keyPressed(){
  game.keyPressed(key);
}

function draw() {
  if(currentScene === 'game') {
    game.draw();
  }
}

