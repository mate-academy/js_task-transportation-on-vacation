/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const carCost = 40;
  const basicDiscount = 50;
  const additionalDiscount = 20;
  const carCostsTotal = carCost * days;

  if (days >= 7) {
    return carCostsTotal - basicDiscount;
  }

  if (days >= 3) {
    return carCostsTotal - additionalDiscount;
  }

  return carCostsTotal;
}

module.exports = calculateRentalCost;
