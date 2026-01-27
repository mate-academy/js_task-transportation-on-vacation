/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;

  let totalPrice = days * pricePerDay;

  if (days >= longTerm) {
    return (totalPrice -= longTermDiscount);
  }

  if (days >= shortTerm) {
    return (totalPrice -= shortTermDiscount);
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
