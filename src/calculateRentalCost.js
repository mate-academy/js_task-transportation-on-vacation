/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_COST = 40;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DAYS = 3;
  const MEDIUM_TERM_DISCOUNT = 20;

  let total = DAILY_RENTAL_COST * days;

  if (days >= LONG_TERM_DAYS) {
    return total - LONG_TERM_DISCOUNT;
}

  if (days >= MEDIUM_TERM_DAYS) {
    return total - MEDIUM_TERM_DISCOUNT;
}

  return total;

}

module.exports = calculateRentalCost;
