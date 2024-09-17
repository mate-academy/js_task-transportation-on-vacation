/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRentCost = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;
  const totalRentalCost = days * dayRentCost;

  if (days >= 7) {
    return totalRentalCost - bigDiscount;
  }

  if (days >= 3) {
    return totalRentalCost - smallDiscount;
  }

  return totalRentalCost;
}
module.exports = calculateRentalCost;
