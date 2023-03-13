//github.com/lukehoban/es6features
import {jsondata} from './housingdata.js';
import {collectData} from './collectdata.js'
// const jsondata = require('housingdata')
const message = "Hello World\n";

let sent = []

//map function allows returns as a list or array. 
//forEach will not return as required.
// var ressentence = jsondata.forEach(obj => collectData(obj))
var ressentence = jsondata.map(collectData).join('\n')
// .join('\n')
console.log(sent.join('\n'))
// console.log(jsondata)
let typesOfData = {
    ordered: [1, 2, 3, 4, 5],
    categorical: ['strawberry', 'apple', 'orange']
  }
document.getElementById("message-element").innerHTML = ressentence
