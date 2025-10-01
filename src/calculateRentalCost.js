/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_PRICE = 40;
  const LONG_TERM_THRESHOLD = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_THRESHOLD = 3;
  const MEDIUM_TERM_DISCOUNT = 20;

  const basePrice = days * DAILY_RENTAL_PRICE;
  let discount = 0;

  if (days >= LONG_TERM_THRESHOLD) {
    discount = LONG_TERM_DISCOUNT;
  } else if (days >= MEDIUM_TERM_THRESHOLD) {
    discount = MEDIUM_TERM_DISCOUNT;
  }

  return basePrice - discount;
}

module.exports = calculateRentalCost;
