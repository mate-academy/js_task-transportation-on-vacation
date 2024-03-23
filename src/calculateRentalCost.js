/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sum = 0;

  if (days >= 7) {
    sum = 40 * days;

    return sum - 50;
  }

  if (days >= 3) {
    sum = 40 * days;

    return sum - 20;
  }

  return 40 * days;
}

module.exports = calculateRentalCost;
