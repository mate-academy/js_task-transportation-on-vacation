/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalCost = 0;
  const costCar = 40;
  const cost = costCar * days;
  const longDays = 7;
  const mediumDays = 3;
  const bigDiscount = 50;
  const mediumDiscount = 20;

  if (days >= mediumDays) {
    totalCost = cost - mediumDiscount;
  }

  if (days >= longDays) {
    totalCost = cost - bigDiscount;
  }

  if (days < mediumDays) {
    totalCost = cost;
  }

  return totalCost;
}
module.exports = calculateRentalCost;
