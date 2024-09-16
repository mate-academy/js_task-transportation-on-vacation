/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const shortTerm = 3;
  const basicDiscount = 20;
  const longTerm = 7;
  const additionalDiscount = 50;

  const baseCost = pricePerDay * days;

  if (days < shortTerm) {
    return baseCost;
  }

  if (days < longTerm) {
    return baseCost - basicDiscount;
  }

  return baseCost - additionalDiscount;
}

module.exports = calculateRentalCost;
