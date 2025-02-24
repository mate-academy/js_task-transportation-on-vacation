/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const totalCost = costPerDay * days;
  const discountOne = 20;
  const discountTwo = 50;

  if (days <= 2) {
    return totalCost;
  }

  if (days > 2 && days <= 6) {
    return totalCost - discountOne;
  }

  return totalCost - discountTwo;
}

module.exports = calculateRentalCost;
