/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let result = 0;
  const carRent = 40;

  result = carRent * days;

  if (days >= 3) {
    result = result - 20;
  }

  if (days >= 7) {
    result = result - 30;
  }

  return result;
}

module.exports = calculateRentalCost;
