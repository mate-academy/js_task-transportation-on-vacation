/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_DAY = 40;
  const SHORT_TERN_RENT = 3;
  const LONG_TERN_RENT = 7;
  const SHORT_TERN_DISCONT = 20;
  const LONG_TERN_DISCONT = 50;

  const basePrice = days * RENT_DAY;

  if (days >= LONG_TERN_RENT) {
    return basePrice - LONG_TERN_DISCONT;
  }

  if (days >= SHORT_TERN_RENT) {
    return basePrice - SHORT_TERN_DISCONT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
