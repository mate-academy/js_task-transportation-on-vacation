/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;

  const basePrice = pricePerDay * days;

  const longTerm = 7;

  const shortTerm = 3;

  const shortDiscont = 20;

  const longDiscont = 50;

  if (days >= longTerm) {
    return basePrice - longDiscont;
  }

  if (days >= shortTerm) {
    return basePrice - shortDiscont;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
