'use strict';

const DAILY_RATE = 40;
const SHORT_TERM_MIN_DAYS = 3;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM_MIN_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(days) {
  const baseCost = days * DAILY_RATE;

  if (days >= LONG_TERM_MIN_DAYS) {
    return baseCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_MIN_DAYS) {
    return baseCost - SHORT_TERM_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
