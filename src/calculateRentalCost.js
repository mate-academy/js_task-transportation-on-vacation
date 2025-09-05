/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDay = 40;
  let sum = 0;

  if (days === 0) {
    return 0;
  }

  if (days > 0 && days < 3) {
    sum = oneDay * days;

    return sum;
  }

  if (days >= 3 && days < 7) {
    sum = oneDay * days;

    return sum - 20;
  }

  if (days >= 7) {
    sum = oneDay * days;

    return sum - 50;
  }
}

module.exports = calculateRentalCost;
