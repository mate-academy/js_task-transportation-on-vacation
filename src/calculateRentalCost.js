/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const smallSale = 20;
  const bigSale = 50;
  const dayRent = 40;

  if (days < 3) {
    return days * dayRent;
  }

  if (days >= 3 && days < 7) {
    return days * dayRent - smallSale;
  }

  return days * dayRent - bigSale;
}

module.exports = calculateRentalCost;
