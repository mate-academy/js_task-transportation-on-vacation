/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalSumm = 0;

  if (days >= 7) {
    totalSumm = 40 * days - 50;
  } else if (days >= 3) {
    totalSumm = 40 * days - 20;
  } else {
    totalSumm = 40 * days;
  }

  return totalSumm;
}

module.exports = calculateRentalCost;
