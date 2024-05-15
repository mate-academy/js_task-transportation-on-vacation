/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceRentDay = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;

  let totalAmount = days * priceRentDay;

  if (days >= longTerm) {
    totalAmount -= longTermDiscount;
  } else if (days >= shortTerm) {
    totalAmount -= shortTermDiscount;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
