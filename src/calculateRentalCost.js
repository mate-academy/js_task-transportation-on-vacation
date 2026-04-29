/**
 * @param {number} days
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const pricePerDay = 40;
  let totalCost = pricePerDay * days;

  if (days >= 3&& days <= 6) {
    totalCost -= 20;
  }  if (days >= 7) {
    totalCost -= 50;
  }
  return totalCost;
}

module.exports = calculateRentalCost;
