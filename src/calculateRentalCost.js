/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const basicDiscount = 20;
  const superDiscount = 50;

  const totalCost = days * dayRent;

  if (days < 3) {
    return totalCost;
  } else if (days >= 3 && days < 7) {
    return totalCost - basicDiscount;
  } else {
    return totalCost - superDiscount;
  }
}

module.exports = calculateRentalCost;
