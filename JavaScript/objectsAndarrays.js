//Object : Contains keys and values
let carstring = "1997 Hong Accord : $2800";
console.log(carstring.length)
let words = [];
for (let i = 0;i < carstring.split(' ').length;i++){
    // console.log('hi')
    words.push(carstring.split(' ')[i])
}
console.log(words)

car = {
    year : 1997,
    make : 'Honda',
    model : 'Accord',
    price : 2000
}

var keys = Object.getOwnPropertyNames(car)
keys.forEach(x => console.log(car[x]))
// console.log(Object.getOwnPropertyNames(car))
for(const x of keys){
    console.log(car[x])
}
//can also have objects in arrays
objarray = [{name:'jon',age:3},{name:'don',age:5},{name:'ken',age:5},{name:'ben',age:8},{name:'ren',age:7}]

for(var x of objarray){
    keys = Object.getOwnPropertyNames(x)
    keys.forEach(y => console.log(x[y]))
}

objarray.forEach(x =>console.log(x.name))

const addage = obj => {
    // console.log(obj.age + 2)
    obj.age = obj.age + 2
}

objarray.forEach(x => addage(x))
objarray.forEach(x =>console.log(x.age))

filterobj = objarray.filter(x => x.age < 6)


let makeString = function(x){
    var sentence = ""
    for(key of Object.getOwnPropertyNames(x)){
        sentence += `${key}:${x[key]}`
    }
    return sentence
}

objarray.forEach(obj => makeString(obj))
// console.log(res)
makeString(objarray[0])

let funcone = obj => {
    // var sentence = ""
    // for(key of Object.getOwnPropertyNames(x)){
    //     sentence += `${key}:${x[key]}`
    // }
    const {name,age} = obj
    // console.log(`${name} ${age}`)
    return `${name} ${age}`
    // return obj.name
}

var totalres = objarray.filter(
    x => x.age >=5
).map(funcone).join('\n');
console.log(totalres)

//Making it to a json file
jsonres = JSON.stringify(objarray,null,2)
//Reading a JSON file
// JSON.parse()

// Another way to define objects
var journal = []
function addEntry(events, squirrel) {
    //this will automaticallly bind the arguments
    //to property names
    journal.push({events, squirrel});
  }

addEntry(1,2)
console.log(journal)