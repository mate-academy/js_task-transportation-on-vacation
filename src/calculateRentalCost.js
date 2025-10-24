/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const cost = 40;
  let result;

  if (days < 7) {
    result = days * cost;

    if (days >= 3) {
      result = result - 20;
    }
  } else {
    result = days * cost - 50;
  }

  return result;
}

module.exports = calculateRentalCost;
