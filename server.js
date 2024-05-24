
//>>>>>>>>>>>>>>>>>>>>>>>>DAY-2<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// console.log("server file is running ");

// function add(a, b){
//     return a+b
// }
// console.log(add(2, 3))


// var add = function(a , b){
//     return a + b;
// }
// console.log(add(2 , 3));


// var add = (a , b) => {
//     return a + b
// }
// console.log(add(2 , 3));

// (function add(){
//     console.log("Raza");
// })()

// function callback(){
//     console.log("now adding is sucessfully complete");
// }
// const add = function(a , b , callback){
//      var result = a+ b;
//      console.log('result: ' +result)
//      callback();
// }
// add(3 , 4 , callback)

//  const { log } = require('console');
// var fs = require('fs');
//  var os = require('os');

//  var user = os.userInfo();
//  console.log(user);
//  console.log(user.username);

//  fs.appendFile('greeting.text', 'Hi' + user.username + '!' , ()=>{
//     console.log('file is created')
//  })

// const notes = require('./notes.js')
// console.log('server file is avilable '); 

// var _= require('lodash')

// var age = notes.age;
// var result = notes.addnumber(age+18 , 10)
// console.log(age);
// console.log("result is now " +result);

// var data = ["person", "person", 1 ,2, 1 , 2, 'name', 'age', '2']
// var filter = _.uniq(data);
// console.log(filter);

// console.log(_.isString('Raza'))

// <<<<<<<<<<<<<<<<<<<<<DAY-3>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const jsonString = '{"name": "jhon", "age": 30 , "city" : "New York"}';

// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);


// const objectToConvert = {
//     name: "Alice",
//     age: 25
// }
// const json = JSON.stringify(objectToConvert);
// console.log(json)


// create server using exprees js 
const express = require('express');
const app = express();
const db = require('./db'); // Ensure the db connection is established
const bodyParser = require('body-parser');

app.use(bodyParser.json());


// import the routes file 
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes')

// use the routes 
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});


// <<<<<<<<<<<<<<<<<<<<<<<<<DAY-4>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

 