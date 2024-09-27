/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const smallDiscount = 20;
  const bigDiscount = 50;
  const rentCost = 40;

  const amount = days * rentCost;

  if (days >= 7) {
    return amount - bigDiscount;
  }

  if (days >= 3) {
    return amount - smallDiscount;
  }

  return amount;
}

module.exports = calculateRentalCost;
