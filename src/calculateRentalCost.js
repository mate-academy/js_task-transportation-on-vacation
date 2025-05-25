/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRICE = 40; // Cost per day
  const LONG_TERM_DISCOUNT = 50; // Discount for 7 or more days
  const LONG_TERM_TRESHOLD = 7; // Days threshold for long-term discount
  const SHORT_TERM_DISCOUNT = 20; // Discount for 3 or more days
  const SHORT_TERM_DISCOUNT_TRESHOLD = 3; // Threshold for short-term discount

  if (days >= LONG_TERM_TRESHOLD) {
    return days * BASE_PRICE - LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM_DISCOUNT_TRESHOLD) {
    return days * BASE_PRICE - SHORT_TERM_DISCOUNT;
  }

  return days * BASE_PRICE; // No discount for less than 3 days
}

module.exports = calculateRentalCost;
