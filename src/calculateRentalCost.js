/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;

  if (days < shortTerm) {
    return days * 40;
  }

  if (days < longTerm) {
    return days * 40 - shortTermDiscount;
  }

  return days * 40 - longTermDiscount * Math.trunc(days / longTerm);
}

module.exports = calculateRentalCost;
