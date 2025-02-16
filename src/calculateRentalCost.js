/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const costPerDay = 40;
  const discountSevenDays = 50;
  const discountThreeDays = 20;
  let total = costPerDay * days;

  if (days >= 3 && days < 7) {
    total -= discountThreeDays;
  }

  if (days >= 7) {
    total -= discountSevenDays;
  }

  return total;
}

module.exports = calculateRentalCost;
