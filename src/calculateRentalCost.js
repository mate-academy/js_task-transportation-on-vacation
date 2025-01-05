const PRICE_PER_DAY = 40;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_DISCOUNT = 20;
function calculateRentalCost(days) {
  if (days < 3) {
    return PRICE_PER_DAY * days;
  } else if (days >= 3 && days < 7) {
    return PRICE_PER_DAY * days - SHORT_TERM_DISCOUNT;
  } else {
    return PRICE_PER_DAY * days - LONG_TERM_DISCOUNT;
  }
}
module.exports = calculateRentalCost;
