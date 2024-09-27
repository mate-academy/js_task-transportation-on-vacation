/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basicDiscount = 20;
  const additionalDiscount = 50;
  const rentCost = 40;

  const total = days * rentCost;

  if (days > 2 && days <= 6) {
    return total - basicDiscount;
  } else if (days > 6) {
    return total - additionalDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
