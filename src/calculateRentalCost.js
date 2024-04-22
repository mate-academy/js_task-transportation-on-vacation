/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPrice = 40;

  if (days < 3) {
    return rentPrice * days;
  }

  if (days < 7) {
    return rentPrice * days - 20;
  }

  return rentPrice * days - 50;
}

module.exports = calculateRentalCost;
