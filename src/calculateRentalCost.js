/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRent = 40;
  const daysForSmallDiscount = 3;
  const daysForBigDiscount = 7;
  const basicDiscount = 20;
  const weekDiscount = 50;
  const totalCost = days * dailyRent;

  if (days < daysForSmallDiscount) {
    return totalCost;
  }

  if (days < daysForBigDiscount) {
    return totalCost - basicDiscount;
  }

  return totalCost - weekDiscount;
}

module.exports = calculateRentalCost;
