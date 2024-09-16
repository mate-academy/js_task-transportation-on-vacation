/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPerDay = 40;
  const advanceDiscount = 50;
  const regularDiscount = 20;
  const res = rentPerDay * days;

  if (days > 2) {
    return days > 6 ? res - advanceDiscount : res - regularDiscount;
  }

  return res;
}

module.exports = calculateRentalCost;
