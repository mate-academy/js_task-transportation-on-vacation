/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sum = 0;

  for (let i = 0; i < days; i++) {
    sum += 40;
  }

  if (days >= 3 && days < 7) {
    sum -= 20;
  } else if (days >= 7) {
    sum -= 50;
  }

  return sum;
}

module.exports = calculateRentalCost;
