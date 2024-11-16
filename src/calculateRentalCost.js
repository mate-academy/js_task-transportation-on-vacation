/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTerm = 7;
  const shortTerm = 3;
  const bigDiscount = 50;
  const smallDiscount = 20;
  const price = 40;

  if (days >= longTerm) {
    return days * price - bigDiscount;
  }

  if (days >= shortTerm) {
    return days * price - smallDiscount;
  }

  return days * price;
}

module.exports = calculateRentalCost;
