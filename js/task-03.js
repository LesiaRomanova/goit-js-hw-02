const findLongestWord = function (string) {
  let arrString = string.split(" ");
  let longesWord = 0;
  let word;
  for (let i = 0; i < arrString.length; i++) {
    if (arrString[i].length > longesWord) {
      longesWord = arrString[i].length;
      word = arrString[i];
    }
  }
  return word;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
