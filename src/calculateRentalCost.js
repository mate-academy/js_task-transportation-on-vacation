/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_RATE = 40;
  let fullCost = days * DAILY_RENTAL_RATE;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;

  if (days >= LONG_TERM) {
    fullCost -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    fullCost -= SHORT_TERM_DISCOUNT;
  }

  return fullCost;
}

module.exports = calculateRentalCost;
