/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const longTerm = 7;
  const longTermDiscount = 50;
  const price = 40;

  if (days < shortTerm) {
    return days * price;
  } else if (days < longTerm) {
    return days * price - shortTermDiscount;
  }

  return days * price - longTermDiscount;
}

module.exports = calculateRentalCost;
