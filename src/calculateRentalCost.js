/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  const shortTermRent = 3;
  const shortTermDiscount = 20;
  const longTermRent = 7;
  const longTermDiscount = 50;
  const finalPrice = dailyCost * days;

  if (days >= longTermRent) {
    return finalPrice - longTermDiscount;
  }

  if (days >= shortTermRent) {
    return finalPrice - shortTermDiscount;
  }

  return finalPrice;
}

module.exports = calculateRentalCost;
