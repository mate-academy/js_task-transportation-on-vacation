/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const discount20 = 20;
  const discount50 = 50;
  const basePrice = days * price;

  if (days >= 7) {
    return basePrice - discount50;
  }

  if (days >= 3) {
    return basePrice - discount20;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
