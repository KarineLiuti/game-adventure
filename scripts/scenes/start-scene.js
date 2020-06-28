class StartScene {
  constructor() {}

  draw() {
    this._backgroundImage();
    this._text();
    this._button();
  }

  _backgroundImage() {
    image(startSceneImage, 0, 0, width, height);
  }

  _text() {
    textFont(startSceneFont);
    textAlign(CENTER);
    textSize(50);
    text('As Aventuras de', width/2, height/3);
    textSize(100);
    text('LOVELACE', width/2, (height/5)*2.3)
  }

  _button() {
    buttonManager.draw()
  }
}