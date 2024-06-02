/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let totalCost = 0;
  const daylyPrice = 40;
  const price = days * daylyPrice;
  const discount3Days = 20;
  const discount7Days = 50;

  if (days >= 3 && days < 7) {
    totalCost = price - discount3Days;
  } else if (days >= 7) {
    totalCost = price - discount7Days;
  } else {
    totalCost = price;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
