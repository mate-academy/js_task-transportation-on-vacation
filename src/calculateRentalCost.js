/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days >= 7) {
    const sumTwo = days * 40 - 50;

    return sumTwo;
  }

  if (days >= 3) {
    const sumOne = days * 40 - 20;

    return sumOne;
  }

  return days * 40;
}

module.exports = calculateRentalCost;
