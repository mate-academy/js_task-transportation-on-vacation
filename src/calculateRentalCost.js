/**
 * @param {number} days
 *
 * @return {number}
 */
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const BASE_PRICE = 40;
const SHORT_TERM_DISCOUNT = 20;
const SHORT_TERM = 3;

function calculateRentalCost(days) {
  // write code here
  const basePrice = days * BASE_PRICE;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}
module.exports = calculateRentalCost;
