/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  let total = days * dailyRate;

  if (days >= 7) {
    total -= 50;

    return total;
  }

  if (days >= 3) {
    total -= 20;

    return total;
  }

  return total;
}

module.exports = calculateRentalCost;
