'use strict';

const BASE_COST_PER_DAY = 40;
const SHORT_TERM_COST = 80;
const BASIC_DISCOUNT = 20;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  if (days < 3) {
    return SHORT_TERM_COST;
  }

  if (days >= 3 && days <= 6) {
    return BASE_COST_PER_DAY * days - BASIC_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return BASE_COST_PER_DAY * days - LONG_TERM_DISCOUNT;
  }
}
module.exports = calculateRentalCost;
