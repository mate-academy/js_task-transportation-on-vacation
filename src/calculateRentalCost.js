/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days <= 0) {
    return 0;
  }

  let total = 0;
  const cost = 40;

  if (days <= 2) {
    total = cost * days;
  }

  if (days >= 3) {
    total = cost * days - 20;
  }

  if (days >= 7) {
    total = cost * days - 50;
  }

  return total;
}

module.exports = calculateRentalCost;
