/**
 * @param {number} days
 *
 * @return {number}
 */
const SEVEN_AND_MORE_DAYS_DISCOUNT = 50;
const THREE_AND_MORE_DAYS_DISCOUNT = 20;
const SHORT_RENT_TIME = 3; // DAYS
const LONG_RENT_TIME = 7; // DAYS
const PRICE_PER_DAY = 40; // $

function calculateRentalCost(days) {
  if (days < SHORT_RENT_TIME) {
    return days * PRICE_PER_DAY;
  }

  if (days < LONG_RENT_TIME) {
    return days * PRICE_PER_DAY - THREE_AND_MORE_DAYS_DISCOUNT;
  }

  return days * PRICE_PER_DAY - SEVEN_AND_MORE_DAYS_DISCOUNT;
}

module.exports = calculateRentalCost;
