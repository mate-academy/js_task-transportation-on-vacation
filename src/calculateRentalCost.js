/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const LONG_TERM_DISCOUNT_DAYS = 7;
  const LONG_TERM_DISCOUNT_AMOUNT = 50;
  const SHORT_TERM_DISCOUNT_DAYS = 3;
  const SHORT_TERM_DISCOUNT_AMOUNT = 20;

  const costPerDay = 40;
  const totalCost = days * costPerDay;

  if (days >= LONG_TERM_DISCOUNT_DAYS) {
    return totalCost - LONG_TERM_DISCOUNT_AMOUNT;
  }

  if (days >= SHORT_TERM_DISCOUNT_DAYS) {
    return totalCost - SHORT_TERM_DISCOUNT_AMOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
