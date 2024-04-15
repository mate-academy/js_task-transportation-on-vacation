/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const PRICE = 40;
  const BASIC_DISCOUNT = 20;
  const ADDITIONAL_DISCOUNT = BASIC_DISCOUNT + 30;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return days * PRICE - BASIC_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return days * PRICE - ADDITIONAL_DISCOUNT;
  }

  return days * PRICE;
}

module.exports = calculateRentalCost;
