/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const sum = price * days;

  if (days >= 3 && days < 7) {
    return sum - 20;
  } else if (days >= 7) {
    return sum - 50;
  }

  return sum;
}

module.exports = calculateRentalCost;
