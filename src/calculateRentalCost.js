/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_PRICE = 40;
  const LONG_DAY_DICSOUT = 50;
  const LONG_DAY = 7;
  const SHORT_DAY_DISCOUNT = 20;
  const SHORT_DAY = 3;

  let discont = 0;

  if (days >= LONG_DAY) {
    discont = LONG_DAY_DICSOUT;
  } else if (days >= SHORT_DAY) {
    discont = SHORT_DAY_DISCOUNT;
  }

  return days * DAY_PRICE - discont;
}

module.exports = calculateRentalCost;
