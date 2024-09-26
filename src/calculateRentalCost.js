/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DISCOUNT_SEVEN = 50;
  const DISCOUNT_THREE = 20;
  const LONG_TERM = 7;
  const MIDDLE_TERM = 3;
  const PAY_FOR_DAY = 40;

  if (days >= LONG_TERM) {
    return ((days * PAY_FOR_DAY) - DISCOUNT_SEVEN);
  }

  if (days >= MIDDLE_TERM && days < LONG_TERM) {
    return ((days * PAY_FOR_DAY) - DISCOUNT_THREE);
  }

  return (days * PAY_FOR_DAY);
}

module.exports = calculateRentalCost;
