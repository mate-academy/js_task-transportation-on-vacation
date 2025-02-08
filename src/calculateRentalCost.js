/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRentalPrice = 40;
  let totalRentalCost = dailyRentalPrice * days;

  if (days >= 3 && days < 7) {
    totalRentalCost -= 20;
  }

  if (days >= 7) {
    totalRentalCost -= 50;
  }

  return totalRentalCost;
}

module.exports = calculateRentalCost;

