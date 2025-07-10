// Constants for rental cost calculation
const DAILY_RENTAL_RATE = 40;
const MINIMUM_RENTAL_DAYS = 1;
const SHORT_TERM_DISCOUNT_DAYS = 3;
const SHORT_TERM_DISCOUNT_AMOUNT = 20;
const LONG_TERM_DISCOUNT_DAYS = 7;
const LONG_TERM_DISCOUNT_AMOUNT = 50;

/**
 * Calculates the total rental cost based on the number of rental days.
 *
 * @param {number} numberOfDays
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  if (numberOfDays < MINIMUM_RENTAL_DAYS) {
    return 'Number of rental days must be at least 1';
  }

  const baseCost = numberOfDays * DAILY_RENTAL_RATE;

  if (numberOfDays >= LONG_TERM_DISCOUNT_DAYS) {
    return baseCost - LONG_TERM_DISCOUNT_AMOUNT;
  }

  if (numberOfDays >= SHORT_TERM_DISCOUNT_DAYS) {
    return baseCost - SHORT_TERM_DISCOUNT_AMOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
