/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = days * 40;
  const midDiscount = 20;
  const largeDiscount = 50;
  const longTerm = 7;
  const midTerm = 3;

  if (days >= longTerm) {
    return rentCost - largeDiscount;
  }

  if (days >= midTerm) {
    return rentCost - midDiscount;
  }

  return rentCost;
}

module.exports = calculateRentalCost;
