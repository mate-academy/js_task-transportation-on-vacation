/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  if (days >= 7) {
    return basePrice * days - longTermDiscount;
  }

  if (days >= 3) {
    return basePrice * days - shortTermDiscount;
  }

  return basePrice * days;
}

module.exports = calculateRentalCost;
