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

  if (days < mediumTerm) {
    return calc;
  }

  if (days < longTerm) {
    return calc - mediumTermDiscount;
  }

  return calc - longTermDiscount;
}

module.exports = calculateRentalCost;
