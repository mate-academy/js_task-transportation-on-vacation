/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAYS = days;
  const ONE_DAY_PRISE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MIDDLE_TERM = 3;
  const MIDDLE_TERM_DISCOUNT = 20;

  if (DAYS >= LONG_TERM) {
    const LONG_TERM_TOTAL = DAYS * ONE_DAY_PRISE - LONG_TERM_DISCOUNT;

    return LONG_TERM_TOTAL;
  }

  if (DAYS >= MIDDLE_TERM) {
    const MIDDLE_TERM_TOTAL = DAYS * ONE_DAY_PRISE - MIDDLE_TERM_DISCOUNT;

    return MIDDLE_TERM_TOTAL;
  }

  return DAYS * ONE_DAY_PRISE;
}

module.exports = calculateRentalCost;
