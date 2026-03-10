/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const MEDIUM_TERM_DAYS = 3;
  const MEDIUM_TERM_DISCOUNT = 20;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const DAILY_RENT = 40;
  let discount = 0;

  if (days >= MEDIUM_TERM_DAYS) {
    discount = MEDIUM_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM_DAYS) {
    discount = LONG_TERM_DISCOUNT;
  }
  const price = days * DAILY_RENT - discount;

  return price;
}

module.exports = calculateRentalCost;
