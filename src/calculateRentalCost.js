/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const basicDiscount = 50;
  const additionalDiscount = 20;
  const totalCost = dayRent * days;

  if (days >= 7) {
    return totalCost - basicDiscount;
  }

  if (days >= 3) {
    return totalCost - additionalDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
