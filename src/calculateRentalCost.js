/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;

  const shortTerm = 3;
  const longTerm = 7;

  const longTermDiscount = 50;
  const shortTermDiscount = 20;

  const rentPrice = days * pricePerDay;

  if (days >= longTerm) {
    return rentPrice - longTermDiscount;
  }

  if (days >= shortTerm) {
    return rentPrice - shortTermDiscount;
  }

  return rentPrice;
}

module.exports = calculateRentalCost;
