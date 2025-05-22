/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DISCOUNT_THRESHOLDS_DESCENDING = [7, 3];
  const DISCOUNTS_DESCENDING = [50, 20];
  const COST = 40;

  for (let i = 0; i < DISCOUNT_THRESHOLDS_DESCENDING.length; i++) {
    if (days >= DISCOUNT_THRESHOLDS_DESCENDING[i]) {
      return days * COST - DISCOUNTS_DESCENDING[i];
    }
  }

  return days * COST;
}

module.exports = calculateRentalCost;
