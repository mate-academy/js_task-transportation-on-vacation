/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = days * 40;
  const shortTerm = 3;
  const longTerm = 7;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  if (days >= longTerm) {
    return price - longTermDiscount;
  }

  if (days >= shortTerm) {
    return price - shortTermDiscount;
  }

  return price;
}

module.exports = calculateRentalCost;
