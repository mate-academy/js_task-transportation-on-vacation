/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const threeDays = 20;
  const sevenDays = 50;
  const rent = 40;
  const totalSum = days * rent;
  if (days >= 3 && days < 7) {
    return (totalSum - threeDays); // write code here
  } else if (days >= 7) {
    return (totalSum - sevenDays);
  } else {
    return totalSum;
  }
}
module.exports = calculateRentalCost;
