const DAILY_PRICE = 40;
const LONG_TERM_THRESHOLD = 7;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_THRESHOLD = 3;
const SHORT_TERM_DISCOUNT = 20;

/**
 * Calculates the total cost of renting a car for a given number of days.
 *
 * @param {number} days - The number of days the car is rented.
 * @returns {number} The total rental cost.
 */
function calculateRentalCost(days) {
  const baseCost = days * DAILY_PRICE;

  if (days >= LONG_TERM_THRESHOLD) {
    return baseCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_THRESHOLD) {
    return baseCost - SHORT_TERM_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
