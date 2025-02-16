/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sumTotal = 0;
  const costs = 40;
  const discountOne = 20;
  const discountTwo = 50;

  if (days >= 7) {
    sumTotal = days * costs - discountTwo;
  } else if (days >= 3) {
    sumTotal = days * costs - discountOne;
  } else {
    sumTotal = days * costs;
  }

  return sumTotal;
}

module.exports = calculateRentalCost;
