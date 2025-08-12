/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40 * days;

  const shortDiscont = 20;

  const longDiscont = 50;

  if (days >= 7) {
    return basePrice - longDiscont;
  } else if (days >= 3) {
    return basePrice - shortDiscont;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
