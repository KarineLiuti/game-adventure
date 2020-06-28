class Life {
  constructor(startAmount, totalAmount) {
    this.startAmount = startAmount;
    this.totalAmount = totalAmount;
    this.life = this.totalAmount;

    this.widthImage = 25;
    this.heightImage = 25;

    this.margin = 25;
    this.positionXStarted = 20;
    this.y = 20;
  }

  draw() {
    for(let lifeQuantityIndex = 0; lifeQuantityIndex < this.life; lifeQuantityIndex++) {
      const position = this.positionXStarted * (lifeQuantityIndex + 1);
      this.margin = lifeQuantityIndex * 10;
      
      image(lifeImage, this.margin + position, this.y, this.widthImage, this.heightImage)
      
    }
  }
}