/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const discountLess = 20;
  const discountMore = 50;
  const totalCost = days * price;
  const totalCostLess = totalCost - discountLess;
  const totalCostMore = totalCost - discountMore;

  if (days > 2 && days < 7) {
    return totalCostLess;
  } else if (days > 6) {
    return totalCostMore;
  }
  return totalCost;
}

module.exports = calculateRentalCost;
