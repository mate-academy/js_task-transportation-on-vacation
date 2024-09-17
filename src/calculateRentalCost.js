/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const largeRent = 50;
  const smallRent = 20;
  const mainCost = 40;
  let totalCost = mainCost * days;
  if (days >= 7) {
    totalCost = totalCost - largeRent;
  } else if (days >= 3) {
    totalCost = totalCost - smallRent;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
