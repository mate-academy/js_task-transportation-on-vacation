/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sum = 0;
  const price = 40;
  const littleDiscount = 20;
  const bigDiscount = 30;

  sum = days * price;

  if (days >= 3) {
    sum -= littleDiscount;
  }

  if (days >= 7) {
    sum -= bigDiscount;
  }

  return sum;
}

module.exports = calculateRentalCost;
