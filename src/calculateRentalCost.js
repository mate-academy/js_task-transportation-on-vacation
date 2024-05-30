/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const cost = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  let vocationCost = 0;

  if (days >= 7) {
    vocationCost += days * cost - bigDiscount;
  } else if (days >= 3) {
    vocationCost += days * cost - smallDiscount;
  } else {
    vocationCost += days * cost;
  }

  return vocationCost;
}

module.exports = calculateRentalCost;
