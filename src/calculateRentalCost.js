/**
 * @param {number} days
 *
 * @return {number}
 */
const PRICE_PER_DAY = 40;
const LONG_RENT_DAYS = 7;
const LONG_RENT_DISCOUNT = 50;
const MID_RENT_DAYS = 3;
const MID_RENT_DISCOUNT = 20;

function calculateRentalCost(days) {
  const baseCost = days * PRICE_PER_DAY;

  if (days >= LONG_RENT_DAYS) {
    return baseCost - LONG_RENT_DISCOUNT;
  }

  if (days >= MID_RENT_DAYS) {
    return baseCost - MID_RENT_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
