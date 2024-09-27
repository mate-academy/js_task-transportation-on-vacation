/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const mainFormula = days * rentalCost;

  if (days >= 7) {
    return mainFormula - bigDiscount;
  } else if (days >= 3) {
    return mainFormula - smallDiscount;
  }

  return mainFormula;
}

module.exports = calculateRentalCost;
