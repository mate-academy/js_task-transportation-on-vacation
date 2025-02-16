/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const hasOverThree = days >= 3;
  const smallDiscAmount = days * 40 - 20;
  const hasOverSeven = days >= 7;
  const bigDiscAmount = days * 40 - 50;

  if (hasOverSeven) {
    return bigDiscAmount;
  } else if (hasOverThree) {
    return smallDiscAmount;
  }

  return days * 40;
}

module.exports = calculateRentalCost;
