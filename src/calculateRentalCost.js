/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  let totalSum = 0;

  for (let day = 1; day <= days; day++) {
    totalSum = totalSum + pricePerDay;
  }

  if (days >= 7) {
    return totalSum - 50;
  }

  if (days >= 3) {
    return totalSum - 20;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
