/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM_RENT_CAR_DAYS = 7;
  const SHORT_TERM_RENT_CAR_DAYS = 3;
  const LONG_TERM_RENT_CAR_DISCOUNT = 50;
  const SHORT_TERM_RENT_CAR_DISCOUNT = 20;
  const COSTS_RENT_CAR_DAY = 40;
  const basicRentCost = days * COSTS_RENT_CAR_DAY;

  if (days >= LONG_TERM_RENT_CAR_DAYS) {
    return basicRentCost - LONG_TERM_RENT_CAR_DISCOUNT;
  }

  if (days >= SHORT_TERM_RENT_CAR_DAYS) {
    return basicRentCost - SHORT_TERM_RENT_CAR_DISCOUNT;
  }

  return basicRentCost;
}

module.exports = calculateRentalCost;
