/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const costDays = days * 40;

  if (days <= 2) {
    return costDays;
  }

  if (days < 7) {
    return costDays - 20;
  }

  return costDays - 50;
}

module.exports = calculateRentalCost;
