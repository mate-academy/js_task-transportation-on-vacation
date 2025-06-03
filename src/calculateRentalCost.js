/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_VALUE = 40;
  const LONGTERM_RENTAL = 7;
  const LONGTERM_DISCOUNT = 50;
  const MEDIUM_RENTAL = 3;
  const MEDIUM_DISCOUNT = 20;

  if (days >= LONGTERM_RENTAL) {
    return days * DAY_VALUE - LONGTERM_DISCOUNT;
  }

  if (days >= MEDIUM_RENTAL) {
    return days * DAY_VALUE - MEDIUM_DISCOUNT;
  }

  return days * DAY_VALUE;
}

module.exports = calculateRentalCost;
