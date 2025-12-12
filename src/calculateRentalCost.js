/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_RENT = 40;
  const MID_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;

  let currentDiscount = 0;

  if (days >= 7) {
    currentDiscount = BIG_DISCOUNT;
  } else if (days >= 3) {
    currentDiscount = MID_DISCOUNT;
  }

  return days * DAY_RENT - currentDiscount;
}

module.exports = calculateRentalCost;
