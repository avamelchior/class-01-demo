'use strict'

let userName = prompt('What is your name?');
console.log('username', userName);

let favShow = prompt('What is your favorite show?');
console.log('favorite show', favShow);

let message = 'Welcome to the Fun Happy Website, '

let message2 = 'is a great color, and '

let message3 = 'is a great background choice! '

let message4 = 'If I have not seen '

let message5 = ', then I will have to watch it!'

let favColor = prompt('What is your favorite color?');
console.log('color', favColor)

var screenColor = prompt("What background color would you like to see?");
document.bgColor = screenColor;

document.write(message + userName + ',' + ' ' + favColor + ' ' + message2 + screenColor + ' ' + message3 + message4 + favShow + message5);
