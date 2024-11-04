/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const minLongTerm = 7;
  const minLowTerm = 3;

  if (days >= minLongTerm) {
    return days * 40 - 50;
  }

  if (days >= minLowTerm) {
    return days * 40 - 20;
  }

  if (days < minLowTerm) {
    return days * 40;
  }
}

module.exports = calculateRentalCost;
