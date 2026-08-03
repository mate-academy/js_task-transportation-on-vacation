/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const billWithoutSale = 40 * days;

  if (days < 3) {
    return billWithoutSale;
  }

  if (days < 7) {
    return billWithoutSale - 20;
  }

  if (days >= 7) {
    return billWithoutSale - 50;
  }
}

module.exports = calculateRentalCost;
