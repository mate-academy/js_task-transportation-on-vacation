/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const smallDiscount = 20;
  const greatDiscount = 50;
  const baseCost = 40;
  const totalCost = days * baseCost;

  if ((days >= 3) && (days < 7)) {
    return totalCost - smallDiscount;
  }
  if (days >= 7) {
    return totalCost - greatDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
