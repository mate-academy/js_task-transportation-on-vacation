/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PRICE = 40;
  const DAY_7 = 7;
  const DAY_3 = 3;
  const DISCOUNT_AFTER_DAY_7 = 50;
  const DISCOUNT_AFTER_DAY_3 = 20;
  let rent = RENT_PRICE * days;

  if (days >= DAY_7) {
    rent -= DISCOUNT_AFTER_DAY_7;
  } else if (days >= DAY_3) {
    rent -= DISCOUNT_AFTER_DAY_3;
  }
  return rent;
}
module.exports = calculateRentalCost;
 