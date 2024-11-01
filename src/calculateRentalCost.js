/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const longTerm = 7;
  const longTermDiscount = 50;
  const smallTerm = 3;
  const smallTermDiscount = 20;
  const valueDay = 40;

  if (days >= longTerm) {
    return days * valueDay - longTermDiscount;
  }

  if (days >= smallTerm) {
    return days * valueDay - smallTermDiscount;
  }

  return days * valueDay;
}

module.exports = calculateRentalCost;
