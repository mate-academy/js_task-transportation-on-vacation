/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const discount3 = 20;
  const discount7 = 50;
  const pricePerDay = 40;
  const totalCost = days * pricePerDay;

  if (days >= 7) {
    return totalCost - discount7;
  }

  if (days >= 3 && days < 7) {
    return totalCost - discount3;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
