/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  let totalCost = days * dailyRate;

  if (days >= 7) {
    totalCost -= 50; // $50 discount for 7 or more days
  } else if (days >= 3) {
    totalCost -= 20; // $20 discount for 3 or more days
  }

  return totalCost;
}


module.exports = calculateRentalCost;
