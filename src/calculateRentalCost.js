/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const lowerDiscount = 20;
  const higherDiscount = 50;
  const price = 40;

  if (days >= 7) {
    return days * price - higherDiscount;
  }

  if (days >= 3) {
    return days * price - lowerDiscount;
  }

  return days * price;
}

module.exports = calculateRentalCost;
