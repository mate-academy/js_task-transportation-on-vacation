/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const basePrice = 40;
  const midTerm = 3;
  const longTerm = 7;

  const midTermDiscount = 20;
  const longTermDiscount = 50;

  if (days >= longTerm) {
    return days * basePrice - longTermDiscount;
  } else if (days >= midTerm) {
    return days * basePrice - midTermDiscount;
  } else {
    return days * basePrice;
  }
}

module.exports = calculateRentalCost;
