/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DEF_PRICE = 40;
  const MID_TERM = 3;
  const MID_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const basePrice = days * DEF_PRICE;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  } else if (days >= MID_TERM && days < LONG_TERM) {
    return basePrice - MID_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
