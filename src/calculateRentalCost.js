/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPerDay = 40;
  const price = days * rentPerDay;
  const longTerm = 7;
  const longTermDiscount = 50;
  const mediumTerm = 3;
  const mediumTermDiscount = 20;

  if (days >= longTerm) {
    return price - longTermDiscount;
  }

  if (days >= mediumTerm) {
    return price - mediumTermDiscount;
  }

  return price;
}

module.exports = calculateRentalCost;
