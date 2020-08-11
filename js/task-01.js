const items = ["Mango", "Poly", "Ajax"];

// const logItems = function (items) {
//   let index = 1;
//   for (const item of items) {
//     console.log(`${index} - ${item}`);
//     index += 1;
//   }
// };

const logItems = (item) => {
  for (let i = 0; i < item.length; i++) {
    console.log(`${i + 1} - ${item[i]}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
