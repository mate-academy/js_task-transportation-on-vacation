/**
 * @param {number} days
 *
 * @return {number}
 */

const basePrice = 40;
const weekDiscount = 50;
const shortDiscount = 20;
const LONG_TERM_DAYS_THRESHOLD = 7;
const SHORT_TERM_DAYS_THRESHOLD = 3;

function calculateRentalCost(days) {
  const price = days * basePrice;

  if (days >= LONG_TERM_DAYS_THRESHOLD) {
    return price - weekDiscount;
  }

  if (days >= SHORT_TERM_DAYS_THRESHOLD) {
    return price - shortDiscount;
  }

  return price;
}

module.exports = calculateRentalCost;
