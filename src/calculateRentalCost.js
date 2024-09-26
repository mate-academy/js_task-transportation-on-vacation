/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const noDiscountAmount = days * 40;

  if (days >= 7) {
    return noDiscountAmount - 50;
  }

  if (days >= 3) {
    return noDiscountAmount - 20;
  }

  return noDiscountAmount;
}

module.exports = calculateRentalCost;
