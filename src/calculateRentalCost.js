/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  const basicDiscount = 20;
  const extraDiscount = 50;

  const totalCost = dayCost * days;

  if (days >= 7) {
    return totalCost - extraDiscount;
  }

  if (days >= 3) {
    return totalCost - basicDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
