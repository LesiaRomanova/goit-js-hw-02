// let input;
// const numbers = [];
// let total = 0;

// while (true) {
//   let input = prompt("Введите число!");

//   if (input === null) break;
//   input = Number(input);

//   if (Number.isNaN(input)) {
//     alert("Было введено не число, попробуйте еще раз!");
//   } else {
//     numbers.push(input);
//   }
// }

// if (numbers.length > 0) {
//   for (const number of numbers) {
//     total += number;
//   }
//   alert(`Общая сумма числа равно ${total}`);
// }

let input;
const numbers = [];

do {
  let input = prompt("Введите число!");

  if (input !== null);
  break;

  if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз!");
    continue;
  }
  numbers.push(+input);
} while (input !== null);

if (numbers.length) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  console.log(`Общая сумма числа равно ${total}`);
}

// let input;
// const numbers = [];

// while (true) {
//   const input = prompt("Введите число!");

//   if (input !== null);

//   if (Number.isNaN(input)) {
//     alert("Было введено не число, попробуйте еще раз!");
//   }
//   numbers.push(input);
// };

// if (numbers.length) {
//   let total = 0;
//   for (const number of numbers) {
//     total += number;
//   }
//   alert(`Общая сумма числа равно ${total}`);
// };
