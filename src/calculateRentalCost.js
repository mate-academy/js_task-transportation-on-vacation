/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  let sum = 0;

  for (let i = 1; i <= days; i++) {
    sum = sum + cost;
  }

  if (days >= 3 && days < 7) {
    sum = sum - 20;
  }

  if (days >= 7) {
    sum = sum - 50;
  }

  return sum;
}

module.exports = calculateRentalCost;
