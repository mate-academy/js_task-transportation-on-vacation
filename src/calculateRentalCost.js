/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM_RENTAL_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const BASIC_RENTAL_DAYS = 3;
  const BASIC_DISCOUNT = 20;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return days * PRICE_PER_DAY - LONG_TERM_DISCOUNT;
  }

  if (days >= BASIC_RENTAL_DAYS) {
    return days * PRICE_PER_DAY - BASIC_DISCOUNT;
  }

  return days * PRICE_PER_DAY;
}

module.exports = calculateRentalCost;
