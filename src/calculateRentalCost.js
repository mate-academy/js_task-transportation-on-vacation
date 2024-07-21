/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const basePrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;

// function getMin(numbers) {
//   let min = numbers[0];

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//       min = numbers[i];
//     }
//   }

//   return min;
// }

// function firstAlphabetLetter(word) {
//   for (let i = 0; i < word.length; i++) {
//     const char = word[i].toLowerCase();

//     if (/[a-z]/i.test(char)) {
//       return char;
//     }
//   }
// }

// function getTheBigestDigit(n) {
//   const bigDigit = 0;

//   for (let ch = 0; ch < n.length; ch++) {
//     if (ch[0] > ch[1]) {
//       bigDigit.push(ch[1]);
//     }
//   }

//   return bigDigit;
// }

// function getAverage(numbers) {
//   if (numbers.length === 0) {
//     return 0;
//   }

//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   const average = sum / numbers.length;

//   return average;
// }

// function checkIfAllNumbersAreGreaterThan(numbers, value) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] <= value) {
//       return false;
//     }
//   }

//   return true;
// }
