/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const costTotal = 40 * days;
  const costDiscounted =
    days >= 7 ? costTotal - 50 : days >= 3 ? costTotal - 20 : costTotal;

  return costDiscounted;
}

module.exports = calculateRentalCost;
