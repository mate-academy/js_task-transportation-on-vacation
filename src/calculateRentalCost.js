/**
 *
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;

  if (days < 3) {
    return cost * days;
  }

  if (days < 7) {
    return cost * days - 20;
  }

  if (days >= 7) {
    return cost * days - 50;
  }
}

module.exports = calculateRentalCost;
