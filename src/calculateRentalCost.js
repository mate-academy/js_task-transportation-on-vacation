/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const basicCost = 40;

  if (days >= 3 && days < 7) {
    return days * basicCost - 20;
  }

  if (days >= 7) {
    return days * basicCost - 50;
  }

  return basicCost * days;
}

module.exports = calculateRentalCost;
