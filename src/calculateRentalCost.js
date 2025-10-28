/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  let totalCost = days * dayCost;

  if (days >= 7) {
    totalCost -= 50;
  } else if (days >= 3 && days <= 6) {
    totalCost -= 20;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
