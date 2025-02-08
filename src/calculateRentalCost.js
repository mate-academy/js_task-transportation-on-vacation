/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const longTerm = 7;
  const longTermDiscount = 50;
  const mediumTerm = 3;
  const mediumTermDiscount = 20;
  const dayRent = 40;

  const fullPrice = dayRent * days;

  if (days >= longTerm) {
    return fullPrice - longTermDiscount;
  }

  if (days >= mediumTerm) {
    return fullPrice - mediumTermDiscount;
  }

  return fullPrice;
}

module.exports = calculateRentalCost;
