/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let costForRent = days * 40;

  if (days > 2 && days < 7) {
    costForRent -= 20;
  }

  if (days >= 7) {
    costForRent -= 50;
  }

  return costForRent;
}

module.exports = calculateRentalCost;
