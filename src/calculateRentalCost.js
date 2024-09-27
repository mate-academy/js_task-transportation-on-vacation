/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let result = 0;

  for (let i = 1; i <= days; i++) {
    result += 40;
  }

  if (days >= 7) {
    result -= 50;
  } else if (days >= 3) {
    result -= 20;
  }

  return result;
}

module.exports = calculateRentalCost;
