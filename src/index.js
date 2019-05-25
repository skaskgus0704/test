var _ = require('lodash');
import './css/style.css';
import './css/hello.scss';
import {area, circumference} from './js/circle'
import cube from './js/cube'

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack!!!'], ' ');

  return element;
}

document.body.appendChild(component());

console.log(area(10));
console.log(circumference(10));
console.log(cube(10));