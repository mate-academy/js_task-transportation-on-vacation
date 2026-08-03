/**
 * @param {number} days
 *
 * @return {number}
 */
const PRICE = 40;
const BASIC_DISCOUNT = 20;
const LONG_DISCOUNT = 50;

function calculateRentalCost(days) {
  const total = days * PRICE;

  if (days < 3) {
    return total;
  }

  if (days < 7) {
    return total - BASIC_DISCOUNT;
  }

  return total - LONG_DISCOUNT;
}

module.exports = calculateRentalCost;
module.exports = calculateRentalCost;
