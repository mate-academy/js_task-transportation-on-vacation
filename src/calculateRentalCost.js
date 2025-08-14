/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_COST = 40;
  const DISCOUNT_THRESHOLD_3_DAYS = 3;
  const DISCOUNT_THRESHOLD_7_DAYS = 7;
  const DISCOUNT_FOR_3_DAYS = 20;
  const DISCOUNT_FOR_7_DAYS = 50;

  if (days >= DISCOUNT_THRESHOLD_3_DAYS && days < DISCOUNT_THRESHOLD_7_DAYS) {
    return DAILY_RENTAL_COST * days - DISCOUNT_FOR_3_DAYS;
  }

  if (days < DISCOUNT_THRESHOLD_3_DAYS) {
    return DAILY_RENTAL_COST * days;
  }

  if (days >= DISCOUNT_THRESHOLD_7_DAYS) {
    return DAILY_RENTAL_COST * days - DISCOUNT_FOR_7_DAYS;
  }
}

module.exports = calculateRentalCost;
