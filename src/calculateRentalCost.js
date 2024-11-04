/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalCost = 0;
  const minLongTerm = 7;
  const minLowTerm = 3;

  if (days >= minLongTerm) {
    totalCost = days * 40 - 50;
  } else if (days >= minLowTerm) {
    totalCost = days * 40 - 20;
  } else {
    totalCost = days * 40;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
