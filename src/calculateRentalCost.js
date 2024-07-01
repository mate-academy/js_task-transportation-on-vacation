/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PER_DAY = 40;
  const TOTAL = days * RENT_PER_DAY;
  const THREE_DAYS_DISCOUNT = 20;
  const SEVEN_DAYS_DISCOUNT = 50;
  const SEVEN_DAYS = 7;
  const THREE_DAYS = 3;

  if (days < THREE_DAYS) {
    return days * RENT_PER_DAY;
  }

  if (days >= THREE_DAYS && days < SEVEN_DAYS) {
    return TOTAL - THREE_DAYS_DISCOUNT;
  }

  return TOTAL - SEVEN_DAYS_DISCOUNT;
}

module.exports = calculateRentalCost;
