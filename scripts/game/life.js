class Life {
  constructor(startAmount, totalAmount) {
    this.startAmount = startAmount;
    this.totalAmount = totalAmount;
    this.lifeQuantity = this.totalAmount;

    this.widthImage = 25;
    this.heightImage = 25;

    this.margin = 25;
    this.positionXStarted = 20;
    this.y = 20;

    this.isInvincible = false;
  }

  _beInvincible() {
    this.isInvincible = true;
    setTimeout(() => {
      this.isInvincible = false;
    }, 1000)
  }

  draw() {
    for(let lifeQuantityIndex = 0; lifeQuantityIndex < this.lifeQuantity; lifeQuantityIndex++) {
      const position = this.positionXStarted * (lifeQuantityIndex + 1);
      this.margin = lifeQuantityIndex * 10;
      
      image(lifeImage, this.margin + position, this.y, this.widthImage, this.heightImage)
      
    }
  }

  getLife() {
    if(this.lifeQuantity <= this.totalAmount) this.lifeQuantity++;
  }

  loseLife() {
    if(!this.isInvincible) {
      this.lifeQuantity--;
      this._beInvincible();
    }
  }
}