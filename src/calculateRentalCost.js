/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_RATE = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  let FULL_AMOUNT = DAILY_RENTAL_RATE * days;

  if (days >= 7) {
    FULL_AMOUNT = FULL_AMOUNT - LONG_TERM_DISCOUNT;

    return FULL_AMOUNT;
  } else if (days >= 3) {
    FULL_AMOUNT = FULL_AMOUNT - SHORT_TERM_DISCOUNT;

    return FULL_AMOUNT;
  }

  return FULL_AMOUNT;
}

module.exports = calculateRentalCost;
