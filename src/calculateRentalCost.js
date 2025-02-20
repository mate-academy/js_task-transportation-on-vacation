/**
 * @param {number} days
 *
 * @return {number}
 */

const longTerm = 7;
const usualTerm = 3;
const price = 40;
const longTermDiscount = 50;
const usualTermDiscount = 20;

function calculateRentalCost(days) {
  if (days >= longTerm) {
    return days * price - longTermDiscount;
  }

  if (days >= usualTerm) {
    return days * price - usualTermDiscount;
  }

  return days * price;
}

module.exports = calculateRentalCost;
