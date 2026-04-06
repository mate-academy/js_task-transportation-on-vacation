/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceForDay = 40;
  const price = days * priceForDay;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;

  if (days >= shortTerm) {
    return price - shortTermDiscount;
  }

  if (days >= longTerm) {
    return price - longTermDiscount;
  }

  return price;
}

module.exports = calculateRentalCost;
