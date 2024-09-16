/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const longTerm = 7;
  const shortTerm = 3;
  const longRent = 50;
  const shortRent = 20;

  const basePrice = days * pricePerDay;

  if (days >= longTerm) {
    return basePrice - longRent;
  }

  if (days >= shortTerm && days < longTerm) {
    return basePrice - shortRent;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
