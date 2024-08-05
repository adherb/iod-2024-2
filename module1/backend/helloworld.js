// const Sentiment = require("sentiment");
// const sentiment = new Sentiment();

// function analyzeSentiment(text) {
//   const result = sentiment.analyze(text);
//   return result;
// }

// // Example usage
// const text = "Cats are stupid.";
// const analysisResult = analyzeSentiment(text);
// console.log(analysisResult);

// console.log("Hello Adam");

// this is the structure of a function
// function ThisIsTheName(Signature) {
// Body
// }

// function sayHello() {
//   console.log("Hello");
// }

// sayHello();

// function sum(num1, b) {
//   console.log(num1 + b);
// }

// sum(5, 1);

// Returns
// function sum(a, b) {
//   return a + b;
// }

// var result = sum(5, 1);

// console.log(result);

// console.log("Hello Danni");
// //Task1
// //Addition
// function additionFunction(a, b) {
//   return a + b;
// }
// console.log(additionFunction(5, 1));
// //subtraction
// function minusFunction(a, b) {
//   return a - b;
// }
// // sum(5, 1);
// console.log(minusFunction(5, 1));
// //division
// function divideFunction(a, b) {
//   return a / b;
// }
// console.log(divideFunction(5, 1));
// //multiply
// function multiplyFunction(a, b) {
//   return a * b;
// }
// console.log(multiplyFunction(5, 2));
// //Task2
// let text1 = "Hello";
// let text2 = "Danni";
// let text3 = text1.concat(text2);

// var name = "Adam";

// console.log(name);

// // console.log(“hello” + name)
// console.log("this is a Message");
// console.info("this is info");
// console.warn("this is a warning");
// console.error("this is an error");

// const helloText = "say Hi";
// helloText = "say Hello instead"; // error: Assignment to constant variable

// const helloText = "say Hi";
// const helloText = "say Hello instead"; // error: Identifier 'helloText' has

// objects in javascript contain keys (or properties) with corresponding values
const user = {
  first_name: "Adam",
  last_name: "Herbert",
  age: 36,
  followers: 987,
};

console.log(user.first_name);
console.log(user.age);

console.log(user["last_name"]);

user.followers = 1987;
console.log(user.followers);

user.location = "Gold Coast";
console.log(user.location);
