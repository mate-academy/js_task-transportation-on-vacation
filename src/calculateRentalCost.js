/**
 * @param {number} days
 *
 * @return {number}
 */
const PRICE_PER_DAY = 40;
const LONG_TERM_RENT_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;
const MID_TERM_RENT_DAYS = 3;
const MID_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const baseCost = days * PRICE_PER_DAY;

  if (days >= LONG_TERM_RENT_DAYS) {
    return baseCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM_RENT_DAYS) {
    return baseCost - MID_TERM_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
