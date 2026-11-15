/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costBeforeDiscount = days * 40;

  if (days >= 7) {
    return costBeforeDiscount - 50;
  }

  if (days >= 3) {
    return costBeforeDiscount - 20;
  }

  if (days < 3) {
    return costBeforeDiscount;
  }
}

module.exports = calculateRentalCost;
