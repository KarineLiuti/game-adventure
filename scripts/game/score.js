class Score {
  constructor() {
    this.score = 0;
  }

  show() {
    textAlign(RIGHT);
    textStyle(BOLD);
    textSize(50);
    fill('#fffd00');
    text(parseInt(this.score), width - 30, 50);
  }

  addScore() {
    this.score += 0.3;
  }
}