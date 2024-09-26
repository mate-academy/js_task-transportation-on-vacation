/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  let totalRentalCost;

  if (days < 3) {
    totalRentalCost = days * 40;
  } else if (days < 7) {
    totalRentalCost = days * 40 - 20;
  } else {
    totalRentalCost = days * 40 - 50;
  }

  return totalRentalCost;
}

module.exports = calculateRentalCost;
