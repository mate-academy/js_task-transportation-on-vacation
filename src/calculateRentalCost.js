/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_RATE = 40;
  const longDays = 7;
  const shortDays = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const price = DAILY_RENTAL_RATE * days;

  if (days >= longDays) {
    return price - LONG_TERM_DISCOUNT;
  }

  if (days >= shortDays) {
    return price - SHORT_TERM_DISCOUNT;
  }

  return price;
}

module.exports = calculateRentalCost;
