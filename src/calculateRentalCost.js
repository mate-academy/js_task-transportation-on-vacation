/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRent = 40;
  const smallTerm = 3;
  const smallTermDiscount = 20;
  const largeTerm = 7;
  const largeTermDiscount = 50;
  const cost = days * dailyRent;

  if (days >= largeTerm) {
    return cost - largeTermDiscount;
  }

  if (days >= smallTerm) {
    return cost - smallTermDiscount;
  }

  return cost;
}

module.exports = calculateRentalCost;
