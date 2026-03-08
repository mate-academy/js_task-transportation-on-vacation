/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_RATE = 40;
  const LONG_RENTAL_THRESHOLD = 7;
  const LONG_RENTAL_DISCOUNT = 50;
  const SHORT_RENTAL_THRESHOLD = 3;
  const SHORT_RENTAL_DISCOUNT = 20;

  const baseCost = days * DAILY_RATE;

  if (days >= LONG_RENTAL_THRESHOLD) {
    return baseCost - LONG_RENTAL_DISCOUNT;
  }

  if (days >= SHORT_RENTAL_THRESHOLD) {
    return baseCost - SHORT_RENTAL_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
