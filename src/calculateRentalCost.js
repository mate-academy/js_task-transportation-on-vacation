/**
 * @param {number} days
 *
 * @return {number}
 */
const BASE_PRICE_PER_DAY = 40;
const WEEK_OR_MORE = 7;
const WEEK_OR_MORE_DISCOUNT = 50;
const THREE_DAYS_OR_MORE = 3;
const THREE_DAYS_OR_MORE_DISCOUNT = 20;

function calculateRentalCost(days) {
  if (days >= WEEK_OR_MORE) {
    return days * BASE_PRICE_PER_DAY - WEEK_OR_MORE_DISCOUNT;
  }

  if (days >= THREE_DAYS_OR_MORE) {
    return days * BASE_PRICE_PER_DAY - THREE_DAYS_OR_MORE_DISCOUNT;
  }

  return days * BASE_PRICE_PER_DAY;
}

module.exports = calculateRentalCost;
