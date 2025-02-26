/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const bigDisc = 50;
  const smallDisc = 20;
  let totalCost = days * dailyRate;

  if (days >= 7) {
    totalCost -= bigDisc;
  } else if (days >= 3) {
    totalCost -= smallDisc;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
