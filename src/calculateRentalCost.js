'use strict';

const RENTAL_COST_PER_DAY = 40;

const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;

const SHORT_TERM = 3;
const SHORT_TERM_DISCOUNT = 20;

/**
 * @param {number} days
 *
 * @return {number}
 */
const calculateRentalCost = (days) => {
  const rentalCost = days * RENTAL_COST_PER_DAY;

  if (days >= LONG_TERM) {
    return rentalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return rentalCost - SHORT_TERM_DISCOUNT;
  }

  return rentalCost;
};

module.exports = calculateRentalCost;
