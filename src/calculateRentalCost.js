/**
 * @param {number} days
 *
 * @return {number}
 */
const DAILY_RATE = 40;
const DISCOUNT_3_PLUS_DAYS = 20;
const DISCOUNT_7_PLUS_DAYS = 50;
const MIN_DAYS_FOR_DISCOUNT_3 = 3;
const MIN_DAYS_FOR_DISCOUNT_7 = 7;

function calculateRentalCost(days) {
  let totalCost = days * DAILY_RATE;

  // Apply discounts
  if (days >= MIN_DAYS_FOR_DISCOUNT_7) {
    totalCost -= DISCOUNT_7_PLUS_DAYS;
  } else if (days >= MIN_DAYS_FOR_DISCOUNT_3) {
    totalCost -= DISCOUNT_3_PLUS_DAYS;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
