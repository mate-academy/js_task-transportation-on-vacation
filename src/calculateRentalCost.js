/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_FOR_DAY = 40;
  const THREE_DAYS_DISCOUNT = 20;
  const SEVEN_DAYS_DISCOUNT = 50;

  const THREE_DAYS = 3;
  const SEVEN_DAYS = 7;

  if (days < THREE_DAYS) {
    return days * RENT_FOR_DAY;
  }

  if (days < SEVEN_DAYS) {
    return days * RENT_FOR_DAY - THREE_DAYS_DISCOUNT;
  }

  return days * RENT_FOR_DAY - SEVEN_DAYS_DISCOUNT;
}

module.exports = calculateRentalCost;
