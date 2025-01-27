/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const value = days * 40;

  const minDiscount = 20;
  const maxDiscount = 50;

  const longTerm = 7;
  const shortTerm = 3;

  if (days >= longTerm) {
    return value - maxDiscount;
  }

  if (days >= shortTerm) {
    return value - minDiscount;
  }

  return value;
}

module.exports = calculateRentalCost;
