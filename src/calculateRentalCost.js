/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const sum = days * 40;

  if (days >= 7) {
    return sum - 50;
  } else if (days >= 3) {
    return sum - 20;
  } else {
    return sum;
  }
}

module.exports = calculateRentalCost;
