/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sum = 0;

  if (days < 3) {
    return 40 * days;
  }

  if (days >= 3 && days <= 6) {
    sum = 40 * days - 20;

    return sum;
  }

  if (days >= 7) {
    sum = 40 * days - 50;

    return sum;
  }
}

module.exports = calculateRentalCost;
