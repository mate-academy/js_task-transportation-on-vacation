/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let total = 0;

  if (days >= 7) {
    total = 40 * days - 50;
  } else {
    if (days >= 3) {
      total = 40 * days - 20;
    } else {
      total = 40 * days;
    }
  }

  return total;
}

module.exports = calculateRentalCost;
