/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_RATE = 40;
  const LONG_TERM_RENTAL_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_RENTAL_DAYS = 3;
  const SHORT_TERM_DISCOUNT = 20;

  let price = DAILY_RENTAL_RATE * days;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    price -= LONG_TERM_DISCOUNT;

    return price;
  }

  if (days >= SHORT_TERM_RENTAL_DAYS) {
    price -= SHORT_TERM_DISCOUNT;

    return price;
  }

  return price;
}

module.exports = calculateRentalCost;
