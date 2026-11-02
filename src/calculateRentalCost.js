'use strict';

const BASE_DAILY_RATE = 40;
const LONG_TERM_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;
const MEDIUM_TERM_DAYS = 3;
const MEDIUM_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const total = days * BASE_DAILY_RATE;

  if (days >= LONG_TERM_DAYS) {
    return total - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_DAYS) {
    return total - MEDIUM_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;
