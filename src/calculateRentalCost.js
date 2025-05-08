/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTermDiscount = 50;
  const shortTimeDiscount = 20;
  const basePrice = days * 40;

  if (days < 3) {
    return basePrice;
  }

  if (days < 7) {
    return basePrice - shortTimeDiscount;
  }

  return basePrice - longTermDiscount;
}

module.exports = calculateRentalCost;
