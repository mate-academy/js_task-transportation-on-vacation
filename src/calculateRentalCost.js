/**
 * @param {number} days
 *
 * @return {number}
 */
const longTerm = 7;
const longTermDiscount = 50;
const mediumTerm = 3;
const mediumTermDiscount = 20;
const dayCost = 40;

function calculateRentalCost(days) {
  if (days < mediumTerm) {
    return days * dayCost;
  }

  if (days < longTerm) {
    return days * dayCost - mediumTermDiscount;
  }

  if (days > longTerm) {
    return days * dayCost - longTermDiscount;
  }

  if (days === longTerm) {
    return days * dayCost - longTermDiscount;
  }
}
module.exports = calculateRentalCost;
