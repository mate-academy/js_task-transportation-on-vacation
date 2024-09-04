/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const discount7Days = 50;
  const discount3Days = 20;

  let totalCost = days * costPerDay;

  if (days >= 7) {
    totalCost -= discount7Days;
  } else if (days >= 3) {
    totalCost -= discount3Days;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
