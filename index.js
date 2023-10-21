const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes');

inquirer
    .prompt([
{
type: 'list',
message: 'What shape would you like for your logo?',
choices: ["Triangle","Circle","Square"],
name: 'shape',
},
{
type: 'input',
message: 'What color do you want your shape?',
name: 'shapeColor',
},
{
type: 'input',
message: 'What Text Characters do you want for your logo? (NO MORE THAN 3)',
name: 'logoName',
},
{
type: 'input',
message: 'what color do you want the Text?',
name: 'textColor',
},
])
.then((response) => {
    fs.writeFile('logo.svg', svgMaker(response), (err) =>
      err ? console.error(err) : console.log('Commit logged!')
    );
});
function svgMaker(response){
 let shape;
 if(response.shape === "Circle") {
    shape = new Circle(response.shapeColor);
 }

 if(response.shape === "Triangle") {
    shape = new Triangle(response.shapeColor);
 }

 if(response.shape === "Square") {
    shape = new Square(response.shapeColor);
 }

return `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

${shape.render()}

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.logoName}</text>

</svg>`
}
