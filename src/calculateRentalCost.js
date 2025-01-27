/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let rentCost = days * 40;

  if (days >= 7) {
    rentCost -= 50;
  } else if (days >= 3) {
    rentCost -= 20;
  }

  return rentCost;
}

module.exports = calculateRentalCost;
