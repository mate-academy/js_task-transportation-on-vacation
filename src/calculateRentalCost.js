/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPrice = 40;
  const total = rentPrice * days;
  const minDaysForSale = 3;
  const maxDaysForSale = 7;
  const saleForMinDaysRent = 20;
  const saleForMaxDaysRent = 50;

  if (days >= maxDaysForSale) {
    return total - saleForMaxDaysRent;
  }

  if (days >= minDaysForSale) {
    return total - saleForMinDaysRent;
  }

  return total;
}

module.exports = calculateRentalCost;
