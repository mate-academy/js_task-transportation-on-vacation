/**
 * @param {number} days
 *
 * @return {number}
 */

// Constants for rental pricing
const DAILY_RENTAL_RATE = 40;
const LONG_TERM_THRESHOLD = 7;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_THRESHOLD = 3;
const MID_TERM_DISCOUNT = 20;

// Function to calculate rental cost
function calculateRentalCost(numberOfDays) {
  const baseCost = numberOfDays * DAILY_RENTAL_RATE;

  if (numberOfDays >= LONG_TERM_THRESHOLD) {
    return baseCost - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= MID_TERM_THRESHOLD) {
    return baseCost - MID_TERM_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
