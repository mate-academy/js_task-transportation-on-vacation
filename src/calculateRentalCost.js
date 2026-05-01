/**
 * @param {number} days
 *
 * @return {number}
 */
// Константы выносим наверх для удобного управления тарифами
const PRICE_PER_DAY = 40;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const MEDIUM_TERM = 3;
const MEDIUM_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const total = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return total - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return total - MEDIUM_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
