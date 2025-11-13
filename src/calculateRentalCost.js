/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTerm = 7;
  const minTerm = 3;
  const longTermDiscount = 50;
  const minTermDiscount = 20;
  const cost = 40;
  const totalCost = cost * days;

  if (days >= longTerm) {
    return totalCost - longTermDiscount;
  }

  if (days >= minTerm) {
    return totalCost - minTermDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
