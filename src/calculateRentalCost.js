/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let result = days * 40;

  if (days >= 7) {
    result = result - 50;
  } else if (days >= 3) {
    result = result - 20;
  }

  return result;
}
module.exports = calculateRentalCost;

// test
