/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE = 40;
  const LONG_TERMIN = 7;
  const SHORT_TERMIN = 3;
  const SHORT_DISCOUNT = 20;
  const LONG_DISCOUNT = 50;

  if (days >= LONG_TERMIN) {
    return days * PRICE - LONG_DISCOUNT;
  }

  if (days >= SHORT_TERMIN) {
    return days * PRICE - SHORT_DISCOUNT;
  }

  return days * PRICE;
}

module.exports = calculateRentalCost;
