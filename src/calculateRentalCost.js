/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rent = 40;

  if (days < 3) {
    return days * rent;
  } else if (days >= 3 && days < 7) {
    return days * rent - 20;
  }

  return days * rent - 50;
}

module.exports = calculateRentalCost;
