// Array.prototype.forEach((elem, index, array) => {

// })

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// // numbers.forEach((elem, index, array) => {
// //   console.log("ELEM", elem);
// //   console.log("INDEX", index);
// //   console.log("Array", array);
// // });

// // numbers.forEach((elem) => {
// //   console.log("ELEM:", elem);
// // });

// // numbers.forEach((elem) => {
// //   console.log("ELEM:", elem);
// // });

// const log = (elem) => console.log("ELEM:", elem);

// const multiply = (elem) => elem * 2;

// numbers.forEach(log);

// console.log(numbers.map(multiply));

// console.log(numbers.filter((elem) => elem % 2 === 0));
// console.log(numbers.filter((elem) => elem % 2 !== 0));

// console.log(numbers.find((elem) => elem > 4 && elem % 2 === 0));

// console.log(numbers.every((elem) => elem > 0));
// console.log(numbers.some((elem) => elem < 0));

// console.log(numbers.sort((a, b) => a - b));
// console.log(numbers.sort((a, b) => b - a));

// const string = ["AAA", "FFF", "CCC"];
// console.log(
//   string.sort((str1, str2) => {
//     const cmp1 = str1.toLowerCase();
//     const cmp2 = str2.toLowerCase();

//     if (cmp1 > cmp2) {
//       return 1;
//     } else if (cmp1 < cmp2) {
//       return -1;
//     }
//     return 0;
//   })
// );

// const string = ["aaaa", "AAA", "FFF", "CCC"];
// console.log(
//   string.sort((str1, str2) => {
//     const cmp1 = str1.toLowerCase();
//     const cmp2 = str2.toLowerCase();

//     if (cmp1 > cmp2) {
//       return 1;
//     } else if (cmp1 < cmp2) {
//       return -1;
//     }
//     return 0;
//   })
// );

// console.log(string.sort());

// const array = [{ value: 1 }, { value: 10 }, { value: 5 }];

// console.log(
//   array.sort((obj1, obj2) => {
//     return obj1.value - obj2.value;
//   })
// );

// const array = [
//   { value: 1, string: "AAAA" },
//   { value: 10, string: "BBBBBB" },
//   { value: 5, string: "AAAAA" },
//   { value: 5, string: "WWWWW" },
//   { value: 5, string: "AAAAA" },
// ];
// console.log(
//   array.sort((obj1, obj2) => {
//     if (obj1.value < obj2.value) {
//       return 1;
//     } else if (obj1.value > obj2.value) {
//       return -1;
//     } else {
//       if (obj1.string > obj2.string) {
//         return 1;
//       } else if (obj1.string < obj2.string) {
//         return -1;
//       }

//       return 0;
//     }
//   })
// );

const numbers = [1, 5, 10, -1, 40];

// numbers.reduce((accumulator, element, indexs, array) => {
//   console.log("ACC:", accumulator);
//   console.log("ELEMENT:", element);
//   console.log("INDEX:", indexs);
//   console.log("ARRAY:", array);
// }, 0);

// console.log(numbers.reduce((acc, elem) => acc + elem, 0));

// среднеее число

// console.log(
//   numbers.reduce((acc, elem, index, array) => {
//     if (index === array.length - 1) {
//       return (acc + elem) / array.length;
//     }
//     return acc + elem;
//   }, 0)
// );
