/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rent = 40;
  const discount = 20;
  const bigDiscount = 50;
  let sum = days * rent;

  if (days >= 3 && days < 7) {
    sum -= discount;
  }

  if (days >= 7) {
    sum -= bigDiscount;
  }

  return sum;
}

module.exports = calculateRentalCost;
