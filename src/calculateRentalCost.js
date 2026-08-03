/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;

  const totalPrice = numberOfDays * PRICE_PER_DAY;

  if (numberOfDays >= LONG_TERM) {
    return totalPrice - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= MEDIUM_TERM) {
    return totalPrice - MEDIUM_TERM_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
