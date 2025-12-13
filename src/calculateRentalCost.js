/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRate = 40;

  const week = 7;

  const threeDays = 3;

  const bigdiscount = 50;

  const smalldiscount = 20;

  let totalCost = days * dailyRate;

  if (days >= week) {
    totalCost -= bigdiscount;

    return totalCost;
  } else if (days >= threeDays) {
    totalCost -= smalldiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
