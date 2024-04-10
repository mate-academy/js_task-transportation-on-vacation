/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const rentPrice = 40;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;

  if (days < shortTerm) {
    return days * rentPrice;
  }

  if (days < longTerm) {
    return days * rentPrice - shortTermDiscount;
  }

  return days * rentPrice - longTermDiscount * Math.trunc(days / longTerm);
}

module.exports = calculateRentalCost;
