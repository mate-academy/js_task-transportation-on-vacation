/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const PER_DAY_PRICE = 40;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const MIDDLE_TERM = 3;
  const LONG_TERM = 7;

  const price = days * PER_DAY_PRICE;

  if (days >= LONG_TERM) {
    return price - BIG_DISCOUNT;
  }

  if (days >= MIDDLE_TERM) {
    return price - SMALL_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
