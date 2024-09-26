/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRate = 40;
  const firstBoundaryDaysCount = 3;
  const firstBoundaryDiscount = 20;
  const secondBoundaryDaysCount = 7;
  const secondBoundaryDiscount = 50;

  let result = dayRate * days;

  if (days >= secondBoundaryDaysCount) {
    result = result - secondBoundaryDiscount;
  } else if (days >= firstBoundaryDaysCount) {
    result = result - firstBoundaryDiscount;
  }

  return result;
}

module.exports = calculateRentalCost;
