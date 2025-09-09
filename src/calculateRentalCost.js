/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const rentPrice = days * dayRent;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;

  if (days >= longTerm) {
    return rentPrice - longTermDiscount;
  }

  if (days >= shortTerm) {
    return rentPrice - shortTermDiscount;
  }

  return rentPrice;
}

module.exports = calculateRentalCost;
