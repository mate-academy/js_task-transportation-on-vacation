/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPerDay = 40;
  const totalRent = rentPerDay * days || 0;

  if (days >= 7) {
    return totalRent - 50;
  }

  if (days >= 3) {
    return totalRent - 20;
  }

  return totalRent;
}

module.exports = calculateRentalCost;
