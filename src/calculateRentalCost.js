/**
 * @param {number} days
 *
 * @return {number}
 */

const REGULAR_PRICE = 40;
const DAYS_FOR_MAX_DISCOUNT = 7;
const DAYS_FOR_MIN_DISCOUNT = 3;
const MAX_DISCOUNT_AMOUNT = 50;
const MIN_DISCOUNT_AMOUNT = 20;

function calculateRentalCost(days) {
  const price = days * REGULAR_PRICE;

  if (days >= DAYS_FOR_MAX_DISCOUNT) {
    return price - MAX_DISCOUNT_AMOUNT;
  }

  if (days >= DAYS_FOR_MIN_DISCOUNT) {
    return price - MIN_DISCOUNT_AMOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
