/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {

  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  let carRent = PRICE_PER_DAY * days;

  if (days >= LONG_TERM) {
    carRent = carRent - LONG_TERM_DISCOUNT;

    return carRent;
  }

  if (days >= SHORT_TERM) {
    carRent = carRent - SHORT_TERM_DISCOUNT;

    return carRent;
  }

  return carRent;
}

module.exports = calculateRentalCost;
