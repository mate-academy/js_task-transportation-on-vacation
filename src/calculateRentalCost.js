/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carCost = 40;
  const allCost = days * carCost;
  const bigDiscount = 50;
  const smallDiscount = 20;

  if (days >= 7) {
    return allCost - bigDiscount;
  }

  if (days >= 3) {
    return allCost - smallDiscount;
  }

  return allCost;
}

module.exports = calculateRentalCost;
