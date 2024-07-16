/**
 * @param {number} days
 *
 * @return {number}
 */

const DISCOUNT_THRESHOLD_7_DAYS = 7;
const DISCOUNT_THRESHOLD_3_DAYS = 3;
const DISCOUNT_7_DAYS = 50;
const DISCOUNT_3_DAYS = 20;

function calculateRentalCost(days) {
  const PRICE = 40;

  const totalCost = days * PRICE;

  if (days >= DISCOUNT_THRESHOLD_7_DAYS) {
    return totalCost - DISCOUNT_7_DAYS;
  }

  if (days >= DISCOUNT_THRESHOLD_3_DAYS) {
    return totalCost - DISCOUNT_3_DAYS;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
