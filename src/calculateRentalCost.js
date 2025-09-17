/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceOfTheDay = 40;
  const totalPrice = days * priceOfTheDay;
  const shortTerm = 3;
  const longTerm = 7;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  if (days >= longTerm) {
    return totalPrice - longTermDiscount;
  }

  if (days >= shortTerm) {
    return totalPrice - shortTermDiscount;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
