/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DAYS = 3;
  const MID_TERM_DISCOUNT = 20;

  let totalCost = days * COST_PER_DAY;

  let discount = 0;

  if (days >= LONG_TERM_DAYS) {
    discount = LONG_TERM_DISCOUNT;
  } else if (days >= MID_TERM_DAYS) {
    discount = MID_TERM_DISCOUNT;
  } else {
    discount = 0;
  }

  totalCost = totalCost - discount;

  return totalCost;
}

module.exports = calculateRentalCost;
