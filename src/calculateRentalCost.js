/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const amount = 40 * days;
  let result = 0;

  if (days < 3) {
    result = amount;
  }

  if (days >= 3) {
    result = amount - 20;
  }

  if (days > 6) {
    result = amount - 50;
  }

  return result;
}

module.exports = calculateRentalCost;
