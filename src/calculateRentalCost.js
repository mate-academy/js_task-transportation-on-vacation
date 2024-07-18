const DAILY_RENTAL_COST = 40;
const LONG_TERM_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;
const MEDIUM_TERM_DAYS = 3;
const MEDIUM_TERM_DISCOUNT = 20;

/**
 * Calculate the total rental cost based on the number of days.
 *
 * @param {number} days - The number of days the car is rented.
 * @return {number} - The total rental cost.
 */
function calculateRentalCost(days) {
  const basePrice = days * DAILY_RENTAL_COST;

  if (days >= LONG_TERM_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_DAYS) {
    return basePrice - MEDIUM_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
