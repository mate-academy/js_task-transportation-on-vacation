/**
 * @param {number} days
 *
 * @return {number}
 */

const EVERY_DAY_RENT = 40;
const DISCOUNT_FOR_7_DAYS = 50;
const DISCOUNT_FOR_3_DAYS = 20;
const MIN_DAYS_FOR_7_DAY_DISCOUNT = 7;
const MIN_DAYS_FOR_3_DAY_DISCOUNT = 3;

function calculateRentalCost(days) {
  const totalSum = EVERY_DAY_RENT * days;

  if (days >= MIN_DAYS_FOR_7_DAY_DISCOUNT) {
    return totalSum - DISCOUNT_FOR_7_DAYS;
  }

  if (days >= MIN_DAYS_FOR_3_DAY_DISCOUNT) {
    return totalSum - DISCOUNT_FOR_3_DAYS;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
