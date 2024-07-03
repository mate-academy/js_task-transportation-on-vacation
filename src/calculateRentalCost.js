/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const payment = 40;
  let sum = days * payment;

  if (days > 6) {
    sum -= 50;
  } else if (days > 2) {
    sum -= 20;
  }

  return sum;
}

module.exports = calculateRentalCost;
