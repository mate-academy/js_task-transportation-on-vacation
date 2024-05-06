/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_STAY = 3;
  const BASIC_DISCOUNT = 20;
  const PRICE = 40;
  const LONG_STAY = 7;
  const LONG_STAY_DISCOUNT = 50;

  if (days < SHORT_STAY) {
    return days * PRICE;
  }

  if (days < LONG_STAY) {
    return days * PRICE - BASIC_DISCOUNT;
  }

  return days * PRICE - LONG_STAY_DISCOUNT;
}

module.exports = calculateRentalCost;
