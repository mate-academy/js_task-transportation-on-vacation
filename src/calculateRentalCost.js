/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PER_DAY = 40;
  const SHORT_RENT = 3;
  const SHORT_RENT_DISCOUNT = 20;
  const LONG_RENT = 7;
  const LONG_RENT_DISCOUNT = 50;
  const TOTAL_RENT = days * RENT_PER_DAY;

  if (days >= LONG_RENT) {
    return TOTAL_RENT - LONG_RENT_DISCOUNT;
  }

  if (days >= SHORT_RENT) {
    return TOTAL_RENT - SHORT_RENT_DISCOUNT;
  }

  return TOTAL_RENT;
}

module.exports = calculateRentalCost;
