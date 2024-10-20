/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const RENT_CAR_COST = 40;

  const LONG_TERM = 7;
  const LONG_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_DISCOUNT = 20;

  let totalCost = 0;

  if (days >= LONG_TERM) {
    totalCost += RENT_CAR_COST * days - LONG_DISCOUNT;

    return totalCost;
  }

  if (days >= SHORT_TERM) {
    totalCost += RENT_CAR_COST * days - SHORT_DISCOUNT;

    return totalCost;
  }
  totalCost += RENT_CAR_COST * days;

  return totalCost;
}

module.exports = calculateRentalCost;
