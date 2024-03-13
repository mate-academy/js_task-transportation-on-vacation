/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalCost = days * 40;

  if (days < 3) {
    return totalCost;
  } else if (days < 7) {
    return totalCost - 20;
  } else {
    return totalCost - 50;
  }
}

module.exports = calculateRentalCost;
