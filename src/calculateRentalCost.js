/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const total = days * 40;

  switch (true) {
    case days >= 7:
      return total - 50;

    case days >= 3:
      return total - 20;

    default:
      return total;
  }
}

module.exports = calculateRentalCost;
