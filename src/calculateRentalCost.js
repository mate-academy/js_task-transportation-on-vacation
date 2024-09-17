/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const value = 40;
  let sum = 0;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days >= 7) {
    sum = days * value - bigDiscount;

    return sum;
  }

  if (days >= 3) {
    sum = days * value - smallDiscount;

    return sum;
  }

  if (days >= 1) {
    sum = days * value;

    return sum;
  }
}

module.exports = calculateRentalCost;
