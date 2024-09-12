/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PER_DAY = 40;
  const LONG_RENT = 7;
  const LONG_RENT_DISCOUNT = 50;
  const SHORT_RENT = 3;
  const SHORT_RENT_DISCOUNT = 20;

  if (days >= LONG_RENT) {
    return days * RENT_PER_DAY - LONG_RENT_DISCOUNT;
  }

  if (days >= SHORT_RENT) {
    return days * RENT_PER_DAY - SHORT_RENT_DISCOUNT;
  }

  return days * RENT_PER_DAY;
}

module.exports = calculateRentalCost;
