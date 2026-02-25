const BASE_PRICE = 40;
const BASE_DISCOUNT = 20;
const NORMAL_DISCOUNT = 50;

const MIN_DISCOUNT_PERIOD = 3;
const NORMAL_DISCOUNT_PERIOD = 7;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalSum = days * BASE_PRICE;

  if (days >= NORMAL_DISCOUNT_PERIOD) {
    return totalSum - NORMAL_DISCOUNT;
  }

  if (days >= MIN_DISCOUNT_PERIOD) {
    return totalSum - BASE_DISCOUNT;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
