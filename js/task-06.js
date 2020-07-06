let input;
const numbers = [];
let total = 0;

while (true) {
  let input = prompt("Введите число!");

  if (input === null) break;
  input = Number(input);

  if (Number.isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз!");
  } else {
    numbers.push(input);
  }
}

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  alert(`Общая сумма числа равно ${total}`);
}
