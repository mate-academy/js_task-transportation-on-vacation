/**
 * @param {number} days
 *
 * @return {number}
 */
const firstSale = 20;
const secondSale = 50;
const price = 40;

function calculateRentalCost(days) {
  if ((days >= 0) & (days < 3)) {
    return days * price;
  }

  if ((days >= 3) & (days < 7)) {
    return days * price - firstSale;
  }

  if (days >= 7) {
    return days * price - secondSale;
  }

  return 'Error value';
}

module.exports = calculateRentalCost;
