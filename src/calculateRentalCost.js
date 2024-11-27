/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const longTerm = 7;
  const longTermDiscount = 50;
  const mediumTerm = 3;
  const mediumTermDiscount = 20;
  const calc = days * 40;

  if (days >= longTerm) {
    return calc - longTermDiscount;
  }

  if (days >= mediumTerm) {
    return calc - mediumTermDiscount;
  }

  return calc;
}

module.exports = calculateRentalCost;
