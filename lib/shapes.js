class Circle {
    constructor(shapeColor) {
        this.shapeColor = shapeColor
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor
      }
render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`;
}
}
class Square {
    constructor(shapeColor) {
        this.shapeColor = shapeColor
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor
      }
render() {
    return `<rect width="100" height="100" fill="${this.shapeColor}"/>`;
}
}
class Triangle {
    constructor(shapeColor) {
        this.shapeColor = shapeColor
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor
      }
render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
}
}

module.exports = {Circle, Square, Triangle};

