/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;
  const lowSale = 20;
  const highSale = 50;
  const totalRent = days * rentCost;

  if (days >= 7) {
    return totalRent - highSale;
  }

  if (days >= 3) {
    return totalRent - lowSale;
  }

  return totalRent;
}

module.exports = calculateRentalCost;
