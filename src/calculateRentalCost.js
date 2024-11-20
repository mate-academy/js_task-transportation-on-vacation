/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discount = (days >= 7) ? 50 : (days >= 3) ? 20 : 0;

  return 40 * days - discount;
}

module.exports = calculateRentalCost;
