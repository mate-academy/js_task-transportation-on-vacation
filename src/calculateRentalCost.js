/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const shortTermStart = 3;
  const shortTermEnd = 6;
  const longTerm = 7;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  let result = days * price;

  if (days >= longTerm) {
    result = result - longTermDiscount;
  }

  if (days >= shortTermStart && days <= shortTermEnd) {
    result = result - shortTermDiscount;
  }

  return result;
}

module.exports = calculateRentalCost;
