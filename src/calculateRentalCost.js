/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_PRICE = 40;
  const LONG_TERM_RENTAL_DAYS = 7;
  const LONG_TERM_RENTAL_DISCOUNT = 50;
  const MINIMUM_TERM_RENTAL_DAYS = 3;
  const MINIMUM_TERM_RENTAL_DISCOUNT = 20;

  const totalCost = days * DAILY_RENTAL_PRICE;

  if (days >= LONG_TERM_RENTAL_DAYS) {
    return totalCost - LONG_TERM_RENTAL_DISCOUNT;
  }

  if (days >= MINIMUM_TERM_RENTAL_DAYS) {
    return totalCost - MINIMUM_TERM_RENTAL_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
