/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const perDay = 40;
  let totalCost;

  if (days >= 7) {
    totalCost = perDay * days - 50;
  } else if (days >= 3) {
    totalCost = perDay * days - 20;
  } else {
    totalCost = perDay * days;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
