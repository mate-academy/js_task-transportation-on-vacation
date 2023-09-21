'use strict';

function calculateRentalCost(days) {
  const rentCost = days * 40;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;

  if (days < SHORT_TERM) {
    return rentCost;
  }

  if (days < LONG_TERM) {
    return rentCost - SHORT_TERM_DISCOUNT;
  }

  return rentCost - LONG_TERM_DISCOUNT;
}

module.exports = calculateRentalCost;
