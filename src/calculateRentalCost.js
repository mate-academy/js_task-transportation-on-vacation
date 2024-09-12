/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let result = 0;
  const bigDiscount = 50;
  const smallDiscount = 20;

  if (days >= 3 && days < 7) {
    result -= smallDiscount;
  } else if (days >= 7) {
    result -= bigDiscount;
  }

  result += days * 40;

  return result;
}

module.exports = calculateRentalCost;
