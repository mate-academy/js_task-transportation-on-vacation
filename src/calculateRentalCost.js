/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRental = 40;
  const sevenDaysOff = 50;
  const threeDaysOff = 20;
  const BASIC_DISCOUNT_DAYS = 3;
  const ADDITIONAL_DISCOUNT_DAYS = 7;

  if (days < BASIC_DISCOUNT_DAYS) {
    return days * dayRental;
  }

  if (days >= BASIC_DISCOUNT_DAYS && days < ADDITIONAL_DISCOUNT_DAYS) {
    return days * dayRental - threeDaysOff;
  }

  return days * dayRental - sevenDaysOff;
}
module.exports = calculateRentalCost;
