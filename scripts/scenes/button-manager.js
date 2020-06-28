class ButtonManager {
  constructor(textButton, x, y) {
    this.textButton = textButton;
    this.x = x;
    this.y = y;
    this.button = createButton(this.textButton);
    this.button.addClass('botao-tela-inicial');
    this.button.mousePressed(() => {
      currentScene = 'game'
      this._updateScene();
    })
  }

  draw() {
    this.button.position(this.x, this.y);
    this.button.center('horizontal');
  }

  _updateScene() {
    this.button.remove();
  }
}