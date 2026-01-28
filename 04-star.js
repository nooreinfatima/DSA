// var read = require("readline-sync");

let rows = read.questionInt("enter how many rows you want");
let col = read.questionInt("enter how many columns you want");

let output = "";
for (i = 0; i < 4; i++) {
  // output = output + "*";
  for (j = 0; j < 4; j++) {
    output = output + "*";
  }
  console.log(output);
}

var output = "";
for (i = 0; i < 4; i++) {
  output = output + "*";
}
console.log(output);

<<<<<<< HEAD
var output = "";
for (i = 1; i <= 4; i++) {
  let output = "";
  for (j = 1; j <= 4; j++) {
    output = output + "*";
  }
  console.log(output);
}
=======
//let output = "";
// for (i = 1; i <= 4; i++) {
//   let output = "";
//   for (j = 1; j <= 4; j++) {
//     output = output + "*";
//   }
//   console.log(output);
// }
>>>>>>> e8513df (string methods)
