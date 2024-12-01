/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;

  if (days === 1) {
    return basePrice;
  }

  if (days > 1 && days < 3) {
    return basePrice * days;
  }

  if (days >= 3 && days <= 6) {
    return basePrice * days - 20;
  }

  if (days > 6) {
    return basePrice * days - 50;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
