/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const carCost = 40;
  const total = days * carCost;

  return days >= 7 ? total - 50 : days >= 3 ? total - 20 : total;
}

module.exports = calculateRentalCost;
