class Circle {
    constructor() {

        render() {
        return `<circle cx="150" cy="100" r="80" fill='${shapeColor}'/>`;
        }
    }
}
class Square {
    constructor() {

        render() {
            return `<rect width="100" height="100" fill='${shapeColor}'/>`;
            }
    }
}
class Triangle {
    constructor() {

        render() {
            return `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}"/>`
        }
    }
}

module.exports = Circle;
module.exports = Triangle;
module.exports = Square;
