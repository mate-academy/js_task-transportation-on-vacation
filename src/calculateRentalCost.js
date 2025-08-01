/**
 * @param {number} days
 *
 * @return {number}
 */

let totalAmount = 0;
const DAY_RENT = 40;
const DISCOUNT_7_DAYS = 50;
const DISCOUNT_3_DAYS = 20;

function calculateRentalCost(days) {
  if (days < 1) {
    return 0;
  }

  if (days < 3) {
    totalAmount = DAY_RENT * days;

    return totalAmount;
  }

  if (days >= 3 && days < 7) {
    totalAmount = DAY_RENT * days - DISCOUNT_3_DAYS;

    return totalAmount;
  }

  if (days >= 7) {
    totalAmount = DAY_RENT * days - DISCOUNT_7_DAYS;

    return totalAmount;
  }
}

module.exports = calculateRentalCost;
