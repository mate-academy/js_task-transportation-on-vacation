/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longRent = 7;
  const shortRent = 3;
  const basePrice = days * 40;
  const basicDisc = 20;
  const additionalDisc = 50;

  if (days >= longRent) {
    return basePrice - additionalDisc;
  }

  if (days >= shortRent) {
    return basePrice - basicDisc;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
