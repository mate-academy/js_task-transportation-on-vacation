/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;

  if (days >= 7) {
    return dayRent * days - 50;
  }

  if (days >= 3) {
    return dayRent * days - 20;
  }

  return dayRent * days;
}

module.exports = calculateRentalCost;
