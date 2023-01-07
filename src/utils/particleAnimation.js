class Effect {
  constructor(context, canvasWidth, canvasHeight, fontSize, maxTextMultiplier) {
    this.context = context
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.textX = this.canvasWidth / 2
    this.textY = this.canvasHeight / 2
    this.fontSize = fontSize
    this.lineHeight = this.fontSize * 0.9
    this.maxTextWidth = this.canvasWidth * maxTextMultiplier

    this.particles = []
    this.gap = 4
    this.mouse = {
      radius: 20000,
      x: 0,
      y: 0,
    }
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.x
      this.mouse.y = e.y
    })
  }

  wrapText(text) {
    const gradient = this.context.createLinearGradient(0, 0, this.canvasWidth, this.canvasHeight)
    gradient.addColorStop(0.2, '#08fdd8')
    gradient.addColorStop(0.6, '#f24b67')
    this.context.fillStyle = gradient
    this.context.textAlign = 'center'
    this.context.textBaseLine = 'middle'
    this.context.font = this.fontSize + 'px Poppins'

    //break multiline text
    let linesArray = []
    let words = text.split(' ')
    let lineCounter = 0

    let line = ''
    for (let i = 0; i < words.length; i++) {
      let testLine = line + words[i] + ' '
      if (this.context.measureText(testLine).width > this.maxTextWidth) {
        line = words[i] + ' '
        lineCounter++
      } else {
        line = testLine
      }
      linesArray[lineCounter] = line
    }
    let textHeight = this.lineHeight * lineCounter
    this.textY = this.canvasHeight / 2 - textHeight / 2
    linesArray.forEach((el, index) => {
      this.context.fillText(el, this.textX, this.textY + index * this.lineHeight)
      this.context.strokeText(el, this.textX, this.textY + index * this.lineHeight)
    })
    this.convertToParticles()
  }
  convertToParticles() {
    this.particles = []
    const pixels = this.context.getImageData(0, 0, this.canvasWidth, this.canvasHeight).data
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
    for (let y = 0; y < this.canvasHeight; y += this.gap) {
      for (let x = 0; x < this.canvasWidth; x += this.gap) {
        const index = (y * this.canvasWidth + x) * 4
        const alpha = pixels[index + 3]

        if (alpha > 0) {
          this.particles.push(new Particle(this, x, y))
        }
      }
    }
  }
  render() {
    this.particles.forEach((particle) => {
      particle.update()
      particle.draw()
    })
  }
}

class Particle {
  constructor(effect, x, y) {
    this.effect = effect
    this.x = Math.random() * this.effect.canvasWidth
    this.y = this.effect.canvasHeight
    this.originX = x
    this.originY = y
    this.size = this.effect.gap
    this.dx = 0
    this.dy = 0
    this.vx = 0
    this.vy = 0
    this.force = 0
    this.angle = 0
    this.distance = 0
    this.friction = Math.random() * 0.6 + 0.15
    this.ease = Math.random() * 0.1 + 0.005
  }
  draw() {
    this.effect.context.fillRect(this.x, this.y, this.size, this.size)
  }
  update() {
    this.dx = this.effect.mouse.x - this.x
    this.dy = this.effect.mouse.y - this.y
    this.distance = this.dx * this.dx + this.dy * this.dy
    this.force = -this.effect.mouse.radius / this.distance
    if (this.distance < this.effect.mouse.radius) {
      this.angle = Math.atan2(this.dy, this.dx)
      this.vx += this.force * Math.cos(this.angle)
      this.vy += this.force * Math.sin(this.angle)
    }
    this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease
    this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease
  }
}

export { Effect, Particle }
