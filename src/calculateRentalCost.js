/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  // write code here
  const dayCost = 40;
  const discount3 = 20;
  const discount7 = 50;
  const totalAmount = days * dayCost;

  if (days < 3) {
    return totalAmount;
  } else if (days < 7) {
    return totalAmount - discount3;
  } else {
    return totalAmount - discount7;
  }
}

module.exports = calculateRentalCost;
