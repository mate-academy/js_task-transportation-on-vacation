/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const numberOfDays = days;
  const priceDay = 40;
  let totalPrice = priceDay * numberOfDays;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;

  if (numberOfDays >= longTerm) {
    totalPrice -= longTermDiscount;
  } else if (numberOfDays >= shortTerm) {
    totalPrice -= shortTermDiscount;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
