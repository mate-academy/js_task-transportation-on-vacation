const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const RENT_COST = 40;

function calculateRentalCost(days) {
  if (days >= LONG_TERM) {
    return days * RENT_COST - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return days * RENT_COST - SHORT_TERM_DISCOUNT;
  }

  return days * RENT_COST;
}

module.exports = calculateRentalCost;
