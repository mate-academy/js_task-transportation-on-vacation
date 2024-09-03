/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  let totalCost = days * dailyRate;

  if (days < 3) {
    return totalCost;
  } else if (days >= 3 && days <= 6) {
    return (totalCost = totalCost - 20);
  } else if (days >= 7) {
    return (totalCost = totalCost - 50);
  }
}

module.exports = calculateRentalCost;
