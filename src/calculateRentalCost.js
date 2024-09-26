/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalSum = 40 * days;

  switch (true) {
    case days >= 7:
      return totalSum - 50;

    case days >= 3:
      return totalSum - 20;

    default:
      return totalSum;
  }
}

module.exports = calculateRentalCost;
