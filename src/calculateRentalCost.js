/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PAYMENT = 40;
  const BIGGER_DISCONT = 7;
  const SMALLER_DISCONT = 3;
  let sum = days * PAYMENT;

  if (days >= BIGGER_DISCONT) {
    sum -= 50;

    return sum;
  }

  if (days >= SMALLER_DISCONT) {
    sum -= 20;

    return sum;
  }

  return sum;
}

module.exports = calculateRentalCost;
