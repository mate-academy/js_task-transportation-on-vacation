/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseCost = days * 40;
  const shortDiscount = baseCost - 20;
  const longDiscount = baseCost - 50;

  if (days >= 7) {
    return longDiscount;
  } else if (days >= 3) {
    return shortDiscount;
  } else {
    return baseCost;
  }
}

module.exports = calculateRentalCost;
