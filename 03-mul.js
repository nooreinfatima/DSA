//multiplication table
// for (i = 1; i <= 10; i++) {
// //console.log('2 * ${i} = ${2*i}');
// console.log('2 X',i,'=',2*i);
// }

//Nested loops
//generating tables of
// for (i = 1; i <= 10; i++) {
//   console.log("Table of",i);

//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} X ${j}= ${i * j}`);
//   }

// }

// printing a tables with using range for example--> kitne table se kitne table tak janaa and then range decide kar ke dena for example 45 to 157 dere and then phir program executed hojata
// var read = require("readline-sync");

// let num1 = read.questionInt("enter the starting table  :");
// let num2 = read.questionInt("enter the ending table :");
// let range1 = read.questionInt(" enter the starting range:");
// let range2 = read.questionInt("enter the ending range: ");
// for (i = num1; i <= num2; i++) {
//   for (j = range1; j <= range2; j++) {
//     console.log(`${i} X ${j}= ${i * j}`);
//   }
//   console.log("---------------------------");
// }

var read = require("readline-syc");

let rows = read.questionInt("enter how many rows you want");
let col = read.questionInt("enter how many columns you want");
for (i = 1; i <= rows; i++) {
  for (j = 1; j <= col; j++) {
    console.log("*");
  }
}
