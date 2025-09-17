/**
 * @param {number} rentalDays
 *
 * @return {number}
 */
function calculateRentalCost(rentalDays) {
  const DAILY_RENT = 40;
  const SHORT_TERM_LIMIT = 3;
  const MID_TERM_LIMIT = 7;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  const baseCost = DAILY_RENT * rentalDays;

  if (rentalDays < SHORT_TERM_LIMIT) {
    return baseCost;
  }

  if (rentalDays < MID_TERM_LIMIT) {
    return baseCost - MID_TERM_DISCOUNT;
  }

  return baseCost - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
