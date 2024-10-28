/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const shortTerm = 3;
  const longTerm = 7;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days < shortTerm) {
    return days * basePrice;
  } else if (days < longTerm) {
    return days * basePrice - smallDiscount;
  } else {
    return days * basePrice - bigDiscount;
  }
}

module.exports = calculateRentalCost;
