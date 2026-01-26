/**
 * @param {number} days
 *
 * @return {number}
 */
const DAILY_RATE = 40;
const LONG_RENTAL_DAYS = 7;
const MEDIUM_RENTAL_DAYS = 3;
const LONG_RENTAL_DISCOUNT = 50;
const MEDIUM_RENTAL_DISCOUNT = 20;

function calculateRentalCost(days) {
  const baseCost = days * DAILY_RATE;

  if (days >= LONG_RENTAL_DAYS) {
    return baseCost - LONG_RENTAL_DISCOUNT;
  }

  if (days >= MEDIUM_RENTAL_DAYS) {
    return baseCost - MEDIUM_RENTAL_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
