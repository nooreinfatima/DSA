const arr = [2, 4, 77, 66, 13, 17, 19, 33, 45, 67];
// easy method
// function iseven(arr) {
//   let even = [];
//   for (let i = 0; i <= Array.length; i++) {
//     if (arr[i] % 2 == 0) {
//       even.push(arr[i]);
//     }
//   }
//   return even;
// }
//console.log(iseven(arr));
// using map to solve
// const result = arr.map((ele) => {
//   if (ele % 2 == 0) {
//     return ele;
//   }
// });
// console.log(result);
const evenNums = arr.filter((ele) => ele % 2 == 0);
console.log(evenNums);
