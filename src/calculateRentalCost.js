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
  const dayPrice = PRICE * days;

  if (days >= DAYS_BIG_DISCOUNT) {
    return dayPrice - BIG_DISCOUNT;
  }

  if (days >= DAYS_SMALL_DISCOUNT) {
    return dayPrice - SMALL_DISCOUNT;
  }

  return dayPrice;
}

module.exports = calculateRentalCost;
