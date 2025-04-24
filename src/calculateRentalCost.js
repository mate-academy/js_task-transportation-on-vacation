const SHORT_TERM = 3;
const LONG_TERM = 7;
const RENT_PER_DAY = 40;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  if (days >= LONG_TERM) {
    return RENT_PER_DAY * days - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return RENT_PER_DAY * days - SHORT_TERM_DISCOUNT;
  }

  return RENT_PER_DAY * days;
}

module.exports = calculateRentalCost;
