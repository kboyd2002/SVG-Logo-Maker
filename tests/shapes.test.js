const Square = require("../lib/shapes");
const Triangle = require("../lib/shapes");
const Circle = require("../lib/shapes");

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const shape1 = new Circle();
shape1.setColor("blue");
expect(shape1.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');

const shape2 = new Square();
shape2.setColor("blue");
expect(shape2.render()).toEqual('<rect width="100" height="100" fill="blue" />');