const BASE_PRICE_PER_DAY = 40;
const LONG_TERM_THRESHOLD = 7;
const LONG_TERM_DISCOUNT = 50;
const MEDIUM_TERM_THRESHOLD = 3;
const MEDIUM_TERM_DISCOUNT = 20;
const MIN_RENTAL_DAYS = 1;
const NO_RENTAL_COST = 0;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (!Number.isFinite(days) || days < MIN_RENTAL_DAYS) {
    return NO_RENTAL_COST;
  }

  const totalCost = days * BASE_PRICE_PER_DAY;

  if (days >= LONG_TERM_THRESHOLD) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_THRESHOLD) {
    return totalCost - MEDIUM_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
