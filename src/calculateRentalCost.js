/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  const total = numberOfDays * 40;

  if (numberOfDays >= 7) {
    return total - 50;
  }

  if (numberOfDays >= 3) {
    return total - 20;
  }

  return total;
}

module.exports = calculateRentalCost;
