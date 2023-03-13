const fs = require('fs')
//reading async
// fs.readFile('data.txt',(err,data)=>{
//     if(err){
//         throw err
//     }
//     console.log(data)
// }
// )

//The fs.readFileSync() method is an inbuilt application programming interface of fs module which is used to read the file and return its content. 
var jsonstring = fs.readFileSync('data.txt','utf8')

// console.log(jsonstring)
var jsonres = JSON.parse(jsonstring)
console.log(jsonres['records'])