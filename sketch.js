

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  //gameSound.loop();
  game = new Game();
  game.setup();
  startScene = new StartScene();
  scenes = {
    game,
    startScene
  }
}

function keyPressed(){
  game.keyPressed(key);
}

function draw() {
  scenes[currentScene].draw();
}

