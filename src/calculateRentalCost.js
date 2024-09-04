'use strict';

/**
 * @param {number} days
 * @return {number}
 */
const LONG_TERM_RENTAL_THRESHOLD = 7;
const LONG_TERM_RENTAL_DISCOUNT = 50;
const SHORT_TERM_RENTAL_THRESHOLD = 3;
const SHORT_TERM_RENTAL_DISCOUNT = 20;
const DAILY_RATE = 40;

function calculateCarRentalCost(days) {

  let totalCost = days * DAILY_RATE;


  if (days >= LONG_TERM_RENTAL_THRESHOLD) {
    totalCost -= LONG_TERM_RENTAL_DISCOUNT;
    return totalCost;
  }
  
  if (days >= SHORT_TERM_RENTAL_THRESHOLD) {
    totalCost -= SHORT_TERM_RENTAL_DISCOUNT;
    return totalCost;
  }


  return totalCost;
}

module.exports = calculateCarRentalCost;
