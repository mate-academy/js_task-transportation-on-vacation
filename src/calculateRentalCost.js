/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const totalSum = days * 40;
  const sevenDaysDiscount = 50;
  const threeDaysDiscount = 20;

  if (days >= 7) {
    return (totalSum - sevenDaysDiscount);
  } else if (days >= 3 && days < 7) {
    return (totalSum - threeDaysDiscount);
  }
  return totalSum;
}

module.exports = calculateRentalCost;
