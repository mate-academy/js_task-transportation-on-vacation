/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;
  const rentPrice = days * rentCost;
  const bigDiscount = 50;
  const smallDiscount = 20;

  if (days >= 7) {
    return rentPrice - bigDiscount;
  }

  if (days >= 3) {
    return rentPrice - smallDiscount;
  }

  return rentPrice;
}

module.exports = calculateRentalCost;
