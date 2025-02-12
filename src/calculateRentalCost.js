/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const totalCost = costPerDay * days;
  const longTerm = 7;
  const LongTermDiscount = 50;
  const middleTerm = 3;
  const middleTermDiscount = 20;

  if (days >= longTerm) {
    return totalCost - LongTermDiscount;
  }

  if (days >= middleTerm && days < longTerm) {
    return totalCost - middleTermDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
