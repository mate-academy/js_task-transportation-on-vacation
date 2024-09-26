/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let payment = days * 40;

  if (days > 6) {
    payment -= 50;
  } else if (days > 2) {
    payment -= 20;
  }

  return payment;
}

module.exports = calculateRentalCost;
