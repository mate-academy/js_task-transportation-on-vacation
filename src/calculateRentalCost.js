/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const discount7Days = 50;
  const discount3Days = 20;
  const threshold7days = 7;
  const threshold3days = 3;

  if (days <= 0) {
    return 0;
  }

  const baseCost = days * costPerDay;

  if (days >= threshold7days) {
    return baseCost - discount7Days;
  }

  if (days >= threshold3days) {
    return baseCost - discount3Days;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
