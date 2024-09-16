/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const totalCost = days * rentCost;

  if (days >= 3 && days < 7) {
    return totalCost - smallDiscount;
  } else if (days >= 7) {
    return totalCost - bigDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
