/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days < 3) {
    return days * 40;
  }

  if (days >= 7) {
    const totalSum = days * 40;

    return totalSum - 50;
  }

  if (days >= 3) {
    const totalSum = days * 40;

    return totalSum - 20;
  }
}

module.exports = calculateRentalCost;
