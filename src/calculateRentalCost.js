/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const arend = 40 * days;

  if (days >= 7) {
    return arend - 50;
  } else if (days >= 3) {
    return arend - 20;
  }

  return arend;
}

module.exports = calculateRentalCost;
