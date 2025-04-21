/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const discountMin = 20;
  const discountMax = 50;

  const minDays = 3;
  const maxDays = 7;

  const totalCost = basePrice * days;

  if (days >= minDays && days < maxDays) {
    return totalCost - discountMin;
  }

  if (days >= maxDays) {
    return totalCost - discountMax;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
