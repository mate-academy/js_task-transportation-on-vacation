/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPrice = 40;
  const smallSale = 20;
  const bigSale = 50;

  if (days >= 3 && days < 7) {
    return (rentPrice * days) - smallSale;
  }

  if (days >= 7) {
    return (rentPrice * days) - bigSale;
  }

  return rentPrice * days;
}

module.exports = calculateRentalCost;
