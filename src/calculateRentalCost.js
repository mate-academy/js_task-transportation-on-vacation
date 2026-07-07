/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPayCarRent = 40;

  if (days >= 7) {
    return days * dayPayCarRent - 50;
  }

  if (days >= 3) {
    return days * dayPayCarRent - 20;
  }

  if (days < 3) {
    return dayPayCarRent * days;
  }
}

module.exports = calculateRentalCost;
