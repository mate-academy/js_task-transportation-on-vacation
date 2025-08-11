/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const RENTAL_FOR_DAY = 40;
  const DISCOUNT_3_DAYS = 20;
  const DISCOUNT_7_DAYS = 50;
  const DISCOUNT_3_DAYS_THRESHOLD = 3;
  const DISCOUNT_7_DAYS_THRESHOLD = 7;

  if (days >= DISCOUNT_3_DAYS_THRESHOLD && days < DISCOUNT_7_DAYS_THRESHOLD) {
    return RENTAL_FOR_DAY * days - DISCOUNT_3_DAYS;
  } else if (days >= DISCOUNT_7_DAYS_THRESHOLD) {
    return RENTAL_FOR_DAY * days - DISCOUNT_7_DAYS;
  }

  return RENTAL_FOR_DAY * days;
}

module.exports = calculateRentalCost;
