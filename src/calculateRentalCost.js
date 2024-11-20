/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sum = 0;
  const cost = 40;
  const discount = 20;
  const bigDiscount = 50;

  if (days >= 7) {
    sum = (days * cost) - bigDiscount;
  } else if (days >= 3) {
    sum = (days * cost) - discount;
  } else {
    sum = days * cost;
  }

  return sum;
}

module.exports = calculateRentalCost;
