/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const shortSale = 20;
  const shortRent = 3;
  const longSale = 50;
  const longTerm = 7;

  const basePrice = days * pricePerDay;

  if (days >= longTerm) {
    return basePrice - longSale;
  }

  if (days >= shortRent) {
    return basePrice - shortSale;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
