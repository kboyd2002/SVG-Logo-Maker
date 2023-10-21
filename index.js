const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('Triangle');
const Circle = require('Circle');
const Square = require('Sqaure');

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
message: 'What Characters do you want for your logo? (NO MORE THAN 3)',
name: 'logoName',
},
{
type: 'input',
message: 'what color do you want the Characters?',
name: 'textColor',
},
])



