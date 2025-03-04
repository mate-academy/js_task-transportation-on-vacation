/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const perDay = 40;
  let totalLocation;

  if (days >= 7) {
    totalLocation = perDay * days - 50;
  } else if (days >= 3) {
    totalLocation = perDay * days - 20;
  } else {
    totalLocation = perDay * days;
  }

  return totalLocation;
}

module.exports = calculateRentalCost;
