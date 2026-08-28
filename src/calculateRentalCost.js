/**
 * @param {number} days
 *
 * @return {number}
 */
const dailyRate = 40;
const LONG_TERM_THRESHOLD = 7;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_THRESHOLD = 3;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  if (days >= LONG_TERM_THRESHOLD) {
    const costWithLongTermDiscount = dailyRate * days - LONG_TERM_DISCOUNT;

    return costWithLongTermDiscount;
  }

  if (days >= SHORT_TERM_THRESHOLD) {
    const costWithShortTermDiscount = dailyRate * days - SHORT_TERM_DISCOUNT;

    return costWithShortTermDiscount;
  }

  if (days < SHORT_TERM_THRESHOLD) {
    return dailyRate * days;
  }
}

module.exports = calculateRentalCost;
