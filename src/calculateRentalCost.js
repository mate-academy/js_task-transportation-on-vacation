/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basicDiscount = 20;
  const extendDiscount = 50;
  const rentalCost = days * 40;

  if (days >= 7) {
    return rentalCost - extendDiscount;
  }

  return days >= 3 ? rentalCost - basicDiscount : rentalCost;
}

module.exports = calculateRentalCost;
