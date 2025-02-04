/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDay = 40;
  const totalCost = oneDay * days;

  if (days < 3) {
    return totalCost;
  } else if (days >= 3 && days < 7) {
    return totalCost - 20;
  } else if (days >= 7) {
    return totalCost - 50;
  }
}

module.exports = calculateRentalCost;
