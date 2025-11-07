/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  let result = 0;

  if (days >= 7) {
    result = days * price - 50;
  } else if (days >= 3) {
    result = days * price - 20;
  } else {
    result = days * price;
  }

  return result;
}

module.exports = calculateRentalCost;
