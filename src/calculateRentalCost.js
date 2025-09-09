/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let totalAmount = 0;

  if (days >= 3 && days < 7) {
    totalAmount = days * 40 - 20;
  } else if (days >= 7) {
    totalAmount = days * 40 - 50;
  } else {
    totalAmount = days * 40;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
