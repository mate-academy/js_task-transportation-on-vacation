/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRICE = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM = 3;
  const MID_TERM_DISCOUNT = 20;

  const totalWithoutDiscount = days * BASE_PRICE;

  if (days >= LONG_TERM) {
    return totalWithoutDiscount - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return totalWithoutDiscount - MID_TERM_DISCOUNT;
  }

  return totalWithoutDiscount;

}

module.exports = calculateRentalCost;
