const BASE_PRICE = 40;
const MEDIUM_TERM = 3;
const MEDIUM_DISCOUNT = 20;
const LONG_TERM = 7;
const LONG_DISCOUNT = 50;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalCost = BASE_PRICE * days;

  if (days >= LONG_TERM) {
    return totalCost - LONG_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return totalCost - MEDIUM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
