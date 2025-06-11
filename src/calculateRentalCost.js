/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyCost = 40;

  if (days >= 3 && days < 7) {
    return days * dailyCost - 20;
  } else if (days >= 7) {
    return days * dailyCost - 50;
  } else {
    return days * dailyCost;
  }
}

module.exports = calculateRentalCost;
