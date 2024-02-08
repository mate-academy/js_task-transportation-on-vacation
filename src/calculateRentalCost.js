'use strict';

/**
 * After a hard quarter in the office you decide
 * to get some rest on a vacation.
 * So you will book a flight for you
 * and your family and try to leave all the mess behind you.
 *
 * You will need a rental car in order for you to get around in your vacation.
 * The manager of the car rental makes you some good offers.
 *
 * Every day you rent the car costs $40.
 * If you rent the car for 7 or more days, you get $50 off your total.
 * Alternatively, if you rent the car for 3 or more days,
 * you get $20 off your total.
 *
 * Implement calculateRentalCost function
 * which returns the total amount for different count of days.
 *
 * Examples:
 *  - calculateRentalCost(1) === 40
 *  - calculateRentalCost(3) === 100
 *  - calculateRentalCost(7) === 230
 *
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const TERM_SEVEN_DAYS = 7;
  const TERM_SIX_DAYS = 6;
  const TERM_THREE_DAYS = 3;
  const TERM_TWO_DAYS = 2;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const PRICE_PER_DAY = 40;

  if (days >= TERM_SEVEN_DAYS) {
    return days * PRICE_PER_DAY - LONG_TERM_DISCOUNT;
  }

  if (days >= TERM_SIX_DAYS) {
    return days * PRICE_PER_DAY - SHORT_TERM_DISCOUNT;
  }

  if (days >= TERM_THREE_DAYS) {
    return days * PRICE_PER_DAY - SHORT_TERM_DISCOUNT;
  }

  if (days >= TERM_TWO_DAYS) {
    return days * PRICE_PER_DAY;
  }

  return days * PRICE_PER_DAY;
}

module.exports = calculateRentalCost;
