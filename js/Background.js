class Background {
  constructor(imgSrc, width, height, x, y, vx, vy) {
    this.img = new Image()
    this.img.src = imgSrc
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
  }
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x+this.width, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x+2*this.width, this.y, this.width, this.height)
  }
  update() {
    this.vx += -0.01 // Acceleration
    this.x += this.vx
    this.y += this.vy
    if (this.x < -this.width) {
      this.x += this.width
    }
  }
}
