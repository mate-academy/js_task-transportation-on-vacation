/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rate = 40;
  let total = days * rate;

  if (days >= 7) {
    total -= 50;
  } else if (days >= 3) {
    total -= 20;
  }

  return total;
  // write code here
}

module.exports = calculateRentalCost;
