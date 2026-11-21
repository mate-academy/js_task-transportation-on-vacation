/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const totalCost = days * 40;

  if (days >= 7) {
    return totalCost - 50;
  } else if (days >= 3) {
    return totalCost - 20;
  } else {
    return totalCost;
  }
}

module.exports = calculateRentalCost;
