/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_RENT = 40;
  const MID_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const LONG_TERM = 7;
  const MID_TERM = 3;

  let currentDiscount = 0;

  if (days >= LONG_TERM) {
    currentDiscount = BIG_DISCOUNT;
  } else if (days >= MID_TERM) {
    currentDiscount = MID_DISCOUNT;
  }

  return days * DAY_RENT - currentDiscount;
}

module.exports = calculateRentalCost;
