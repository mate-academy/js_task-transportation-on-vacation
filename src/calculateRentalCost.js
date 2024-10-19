/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  let result = 0;

  if (days >= 7) {
    result = price * days;

    return result - 50;
  } else if (days >= 3) {
    result = price * days;

    return result - 20;
  }
  result = price * days;

  return result;
}

module.exports = calculateRentalCost;
