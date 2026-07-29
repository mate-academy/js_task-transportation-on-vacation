/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let rentAmount = 0;
  let count = 0;

  for (count = 1; count <= days; count++) {
    rentAmount += 40;

    if (count === 3) {
      rentAmount -= 20;
    }

    if (count === 7) {
      rentAmount -= 30;
    }
  }

  return rentAmount;
}

module.exports = calculateRentalCost;
