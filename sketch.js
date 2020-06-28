

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
  buttonManager = new ButtonManager('START', width/2, (height/3)*1.5);
}

function keyPressed(){
  game.keyPressed(key);
}

function draw() {
  scenes[currentScene].draw();
}

