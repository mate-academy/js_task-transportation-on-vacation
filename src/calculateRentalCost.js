/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCarRent = 40;
  const totalRent = dailyCarRent * days;

  if (days > 6) {
    return totalRent - 50;
  } else if (days > 2) {
    return totalRent - 20;
  }

  return totalRent;
}

module.exports = calculateRentalCost;
