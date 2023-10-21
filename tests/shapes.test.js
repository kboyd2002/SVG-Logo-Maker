const {Circle, Square, Triangle} = require('../lib/shapes');

describe('shapes', () => {

it('should make the Triangle blue', () => {
const shape = new Triangle();
shape.shapeColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

it('should make the Circle blue', () => {
const shape1 = new Circle();
shape1.shapeColor("blue");
expect(shape1.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
});

it('should make the Square blue', () => {
const shape2 = new Square();
shape2.shapeColor("blue");
expect(shape2.render()).toEqual('<rect width="100" height="100" fill="blue" />');
    });
});