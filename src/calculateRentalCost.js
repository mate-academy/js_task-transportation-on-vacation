/**
 * @param {number} days
 *
 * @return {number}
 *
 *
 *
 */

const PRICE = 40;

const DAYS_SMALL_DISCOUNT = 3;
const SMALL_DISCOUNT = 20;

const DAYS_BIG_DISCOUNT = 7;
const BIG_DISCOUNT = 50;

function calculateRentalCost(days) {
  // write code here

  if (days >= DAYS_BIG_DISCOUNT) {
    return days * PRICE - BIG_DISCOUNT;
  }

  if (days >= DAYS_SMALL_DISCOUNT) {
    return days * PRICE - SMALL_DISCOUNT;
  }

  return days * PRICE;
}

module.exports = calculateRentalCost;
