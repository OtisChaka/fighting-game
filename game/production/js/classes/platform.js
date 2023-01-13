class Platform {
  constructor(x, y, width, height, sprite) {
    this.position = {
      x: x,
      y: y,
    };
    (this.sprite = sprite), (this.width = width);
    this.height = height;
  }
  draw() {
    c.fillStyle = 'transparent';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
    c.drawImage(
      this.sprite,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  checkCol() {
    if (
      player.sides.bottom <= this.position.y &&
      player.sides.bottom + player.velocity.y >= this.position.y &&
      player.sides.left >= this.position.x &&
      player.position.x <= this.position.x + this.width
    ) {
      player.velocity.y = 0;
    }
  }
}
