/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const total = days * price;
  const bigSale = 50;
  const sale = 20;

  if (days >= 7) {
    return total - bigSale;
  }

  if (days >= 3) {
    return total - sale;
  }

  if (days < 3) {
    return total;
  }
}

module.exports = calculateRentalCost;
