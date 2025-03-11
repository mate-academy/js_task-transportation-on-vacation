/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;

  if (days >= 7) {
    return costPerDay * days - 50;
  } else if (days >= 3) {
    return costPerDay * days - 20;
  }

  return costPerDay * days;
}

module.exports = calculateRentalCost;
