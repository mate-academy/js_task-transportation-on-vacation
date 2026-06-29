/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rent = 40;

  if (days >= 7) {
    return days * rent - 50;
  }

  if (days < 7 && days >= 3) {
    return days * rent - 20;
  }

  return days * rent;
}

module.exports = calculateRentalCost;
