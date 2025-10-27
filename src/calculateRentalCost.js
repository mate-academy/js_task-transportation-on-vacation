/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_OF_CAR = 40;
  const SHORT_DISSCOUNT = 20;
  const LONG_DISSCOUNT = 50;

  const PRICE = days * RENT_OF_CAR;

  if (days >= 7) {
    return PRICE - LONG_DISSCOUNT;
  } else if (days >= 3) {
    return PRICE - SHORT_DISSCOUNT;
  }

  return PRICE;
}

module.exports = calculateRentalCost;
