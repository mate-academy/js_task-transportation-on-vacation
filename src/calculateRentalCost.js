/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const normalRent = 40;
  const costWithoutDiscount = days * normalRent;

  const longTerm = 7;
  const bigDiscount = 50;

  const smallTerm = 3;
  const smallDiscount = 20;

  if (days >= longTerm) {
    return costWithoutDiscount - bigDiscount;
  }

  if (days >= smallTerm) {
    return costWithoutDiscount - smallDiscount;
  }

  return costWithoutDiscount;
}

module.exports = calculateRentalCost;
