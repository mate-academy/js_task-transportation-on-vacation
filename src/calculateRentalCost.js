/**
 * @param {number} days
 *
 * @return {number}
 */

const dayCost = 40;
const longTermDiscountDays = 7;
const midTermDiscountDays = 3;

function calculateRentalCost(days) {
  const baseConst = days * dayCost;

  if (days >= longTermDiscountDays) {
    return baseConst - 50;
  }

  if (days >= midTermDiscountDays) {
    return baseConst - 20;
  }

  return baseConst;
}

module.exports = calculateRentalCost;
