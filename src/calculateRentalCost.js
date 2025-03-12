/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseCost = days * 40;
  const discountOne = 20;
  const discountTwo = 50;

  if (days >= 3 && days < 7) {
    return baseCost - discountOne;
  }

  if (days >= 7) {
    return baseCost - discountTwo;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
