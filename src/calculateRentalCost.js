/**
 * @param {number} days
 *
 * @return {number}
 */

// Виносимо константи у верхню частину файлу
const DAILY_RATE = 40;
const SHORT_TERM_DAYS = 3;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  // Використовуємо константи замість "магічних чисел"
  if (days < SHORT_TERM_DAYS) {
    return days * DAILY_RATE;
  }

  if (days >= SHORT_TERM_DAYS && days < LONG_TERM_DAYS) {
    return days * DAILY_RATE - SHORT_TERM_DISCOUNT;
  }

  // Якщо days >= LONG_TERM_DAYS
  return days * DAILY_RATE - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
