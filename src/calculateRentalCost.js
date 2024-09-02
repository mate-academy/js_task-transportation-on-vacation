/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const defaultPrice = 40;
  const sumPrice = days * defaultPrice;
  const middleSale = sumPrice - 20;
  const maxSale = sumPrice - 50;

  if (days >= 7) {
    return maxSale;
  }

  if (days >= 3) {
    return middleSale;
  }

  return sumPrice;
}

module.exports = calculateRentalCost;
