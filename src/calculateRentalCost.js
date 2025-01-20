/**
 * @param {number} days
 *
 * @return {number}
 */
const LONG_VACATION = 7;
const LONG_VACATION_DISCOUNT = 50;
const SHORT_VACATION = 3;
const SHORT_VACATION_DISCOUNT = 20;
const ONE_DAY_RENT = 40;

function calculateRentalCost(days) {
  if (days >= LONG_VACATION) {
    return ONE_DAY_RENT * days - LONG_VACATION_DISCOUNT;
  }

  if (days >= SHORT_VACATION) {
    return ONE_DAY_RENT * days - SHORT_VACATION_DISCOUNT;
  }

  return ONE_DAY_RENT * days;
}

module.exports = calculateRentalCost;
