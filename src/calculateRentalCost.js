/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const result = days * 40;
  const regularDiscount = 20;
  const longTermDiscount = 50;

  if (days >= 7) {
    return result - longTermDiscount;
  }

  if (days >= 3) {
    return result - regularDiscount;
  }

  return result;
}

module.exports = calculateRentalCost;
