/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PAY_FOR_DAY = 40;
  const MIN_DAYS_FOR_MAX_OFF = 7;
  const MAX_OFF = 50;
  const MIN_DAYS_FOR_FIRST_OFF = 3;
  const MIN_OFF = 20;

  if (days < MIN_DAYS_FOR_FIRST_OFF) {
    return days * PAY_FOR_DAY;
  }

  if (days >= MIN_DAYS_FOR_FIRST_OFF && days < MIN_DAYS_FOR_MAX_OFF) {
    return days * PAY_FOR_DAY - MIN_OFF;
  }

  return days * PAY_FOR_DAY - MAX_OFF;
}

module.exports = calculateRentalCost;
