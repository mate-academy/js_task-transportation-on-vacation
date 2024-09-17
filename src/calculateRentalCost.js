/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const minDiscount = 20;
  const maxDiscount = 50;
  const minDaysForMinDiscount = 3;
  const minDaysForBigDiscount = 7;
  const rentCost = days * dayRent;

  if (days < 0) {
    return 0;
  }

  if (days < minDaysForMinDiscount) {
    return rentCost;
  }

  if (days >= minDaysForMinDiscount && days < minDaysForBigDiscount) {
    return rentCost - minDiscount;
  }

  if (days >= minDaysForBigDiscount) {
    return rentCost - maxDiscount;
  }
}

module.exports = calculateRentalCost;
