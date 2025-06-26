/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const costPerDay = 40;
  const middleTerm = 3;
  const basicDiscount = 20;
  const longTerm = 7;
  const additionalDiscount = 50;
  const baseRentalCost = costPerDay * days;

  if (days >= longTerm) {
    return baseRentalCost - additionalDiscount;
  }

  if (days >= middleTerm) {
    return baseRentalCost - basicDiscount;
  }

  return baseRentalCost;
}

module.exports = calculateRentalCost;
