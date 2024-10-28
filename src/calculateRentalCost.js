/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const price = 40;
  const x = price * days;
  if (days >= 7) {
    return  x - 50;
  }

  if (days >= 3) {
    return x - 20;
  }

  if (days < 3) {
    return x;
  }
}

module.exports = calculateRentalCost;
