/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const EVERY_DAY_COST = 40;
  const DISCOUNT_AFTER_3_DAYS = 20;
  const DISCOUNT_AFTER_7_DAYS = 50;

  if (days <= 2) {
    return days * EVERY_DAY_COST;
  }

  if (days <= 6) {
    return days * EVERY_DAY_COST - DISCOUNT_AFTER_3_DAYS;
  } else {
    return days * EVERY_DAY_COST - DISCOUNT_AFTER_7_DAYS;
  }
}

module.exports = calculateRentalCost;
