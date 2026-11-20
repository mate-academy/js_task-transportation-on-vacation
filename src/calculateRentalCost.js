/**
 * @param {number} days
 *
 * @return {number}
 */

  const pricePerDay = 40;
  const LONG_TERM_DAYS = 7
  const LONG_TERM_DISCOUNT = 50
  const MEDIUM_TERM_DAYS = 3
  const MEDIUM_TERM_DISCOUNT = 20

function calculateRentalCost(days) {
  // write code here

  if (days >= LONG_TERM_DAYS) {
    return days * pricePerDay - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_DAYS) {
    return days * pricePerDay - MEDIUM_TERM_DISCOUNT;
  }

  return days * pricePerDay;
}

module.exports = calculateRentalCost;
