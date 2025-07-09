/**
 * @param {number} days
 *
 * @return {number}
 */

const PRICE = 40;

const LONG_TERM_MINDAYS = 3;

const LONG_TERM_MAXDAYS = 6;

const LONG_TERM_DISCOUNT_FIRST = 20;

const LONG_TERM_DISCOUNT_SECOND = 50;

let SUM_PRICE = 0;

function calculateRentalCost(days) {
  SUM_PRICE = days * PRICE;

  if (days < LONG_TERM_MINDAYS) {
    return SUM_PRICE;
  } else if (days >= LONG_TERM_MINDAYS && days <= LONG_TERM_MAXDAYS) {
    return SUM_PRICE - LONG_TERM_DISCOUNT_FIRST;
  }

  return SUM_PRICE - LONG_TERM_DISCOUNT_SECOND;
}

module.exports = calculateRentalCost;
