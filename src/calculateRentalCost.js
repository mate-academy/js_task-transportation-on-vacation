/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;

  if (days < 3) {
    return costPerDay * days;
  }

  if (days <= 6) {
    return costPerDay * days - 20;
  }

  if (days >= 7) {
    return costPerDay * days - 50;
  }
}

module.exports = calculateRentalCost;
