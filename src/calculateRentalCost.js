/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM_THRESHOLD = 3;
  const LONG_TERM_THRESHOLD = 7;
  const DAILY_RENT = 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const totalCostBeforeDiscount = DAILY_RENT * days;
  const shortDiscountedTotal = totalCostBeforeDiscount - SHORT_TERM_DISCOUNT;
  const longTermDiscountedTotal = totalCostBeforeDiscount - LONG_TERM_DISCOUNT;

  if (days < SHORT_TERM_THRESHOLD) {
    return totalCostBeforeDiscount;
  }

  if (days >= SHORT_TERM_THRESHOLD && days < LONG_TERM_THRESHOLD) {
    return shortDiscountedTotal;
  }

  if (days >= LONG_TERM_THRESHOLD) {
    return longTermDiscountedTotal;
  }
}

module.exports = calculateRentalCost;
