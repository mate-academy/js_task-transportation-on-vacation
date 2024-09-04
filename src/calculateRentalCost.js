/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPrice = 40;
  const rentSum = rentPrice * days;

  if (days >= 7) {
    return rentSum - 50;
  }

  if (days >= 3) {
    return rentSum - 20;
  }

  return rentSum;
}

module.exports = calculateRentalCost;
