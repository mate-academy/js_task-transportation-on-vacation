/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const DAILY_RENTAL_COST = 40;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;

  if (days >= 7) {
    return days * DAILY_RENTAL_COST - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return days * DAILY_RENTAL_COST - MID_TERM_DISCOUNT;
  }
    return days * DAILY_RENTAL_COST;
}

module.exports = calculateRentalCost;
