/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_RENT_PRICE = 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const FULL_TERM = 7;
  const FULL_TERM_DISCOUNT = 50;

  const DISCOUNT =
    days >= FULL_TERM
      ? FULL_TERM_DISCOUNT
      : days >= SHORT_TERM
        ? SHORT_TERM_DISCOUNT
        : 0;

  return days * DAY_RENT_PRICE - DISCOUNT;
}

module.exports = calculateRentalCost;
