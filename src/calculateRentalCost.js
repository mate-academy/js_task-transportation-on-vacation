/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAYRENT = 40;
  const LONG_RENTAL_PERIOD_DAYS = 7;
  const LONG_RENTAL_DISCOUNT = 50;
  const SHORT_RENTAL_PERIOD_DAYS = 3;
  const SHORT_RENTAL_DISCOUNT = 20;
  const rentalCost = DAYRENT * days;

  if (days >= LONG_RENTAL_PERIOD_DAYS) {
    return rentalCost - LONG_RENTAL_DISCOUNT;
  }

  if (days >= SHORT_RENTAL_PERIOD_DAYS) {
    return rentalCost - SHORT_RENTAL_DISCOUNT;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
