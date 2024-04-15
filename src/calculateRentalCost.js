/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const price = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shirtTerm = 3;
  const shirtTermDiscount = 20;
  let totalPrice = price * days;

  if (days >= longTerm) {
    totalPrice -= longTermDiscount;
  } else if (days >= shirtTerm) {
    totalPrice -= shirtTermDiscount;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
