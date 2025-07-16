/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sumWithoutDiscount = 40 * days;

  if (days >= 7) {
    sumWithoutDiscount -= 50;
  } else if (days >= 3) {
    sumWithoutDiscount -= 20;
  }

  return sumWithoutDiscount;
}

module.exports = calculateRentalCost;
