/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyPrice = 40;

  const total = days * dailyPrice;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;

  if (days >= longTerm) {
    return total - longTermDiscount;
  } else if (days >= shortTerm) {
    return total - shortTermDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
