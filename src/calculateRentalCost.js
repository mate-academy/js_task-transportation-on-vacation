/**
 * @param {number} days
 *
 * @return {number}
 */

const dayCost = 40;
const longTermDiscountDays = 7;
const midTermDiscountDays = 3;
const longTermDiscount = 50;
const midTermDiscount = 20;

function calculateRentalCost(days) {
  const baseConst = days * dayCost;

  if (days >= longTermDiscountDays) {
    return baseConst - longTermDiscount;
  }

  if (days >= midTermDiscountDays) {
    return baseConst - midTermDiscount;
  }

  return baseConst;
}

module.exports = calculateRentalCost;
