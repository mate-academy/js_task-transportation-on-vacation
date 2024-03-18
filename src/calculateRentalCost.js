/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;

  const rentCost = dayRent * days;

  if (days >= longTerm) {
    return rentCost - longTermDiscount;
  }

  if (days >= shortTerm && days < longTerm) {
    return rentCost - shortTermDiscount;
  }

  return rentCost;
}

module.exports = calculateRentalCost;
