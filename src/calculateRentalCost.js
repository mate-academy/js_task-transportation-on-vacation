/**
 * @param {number} days
 *
 * @return {number}
 */
const RENT_PRICE = 40;
const DISCOUNT_AFTER_DAY_7 = 50;
const DISCOUNT_AFTER_DAY_3 = 20;
function calculateRentalCost(days) {
  const rent = RENT_PRICE * days;

  if (days >= 7) {
    return rent -DISCOUNT_AFTER_DAY_7;
  } else if (days >= 3) {
    return rent - DISCOUNT_AFTER_DAY_3;
  }
  return rent;

}
module.exports = calculateRentalCost;
