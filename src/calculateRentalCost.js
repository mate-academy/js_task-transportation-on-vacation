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
  const LONG_TERM_VACATION = 7;
  const MEDIUM_TERM_VACATION = 3;
  const LONG_TERM_RENTAL_DISCOUNT = 50;
  const BASIC_DISCOUNT = 20;
  const CAR_COSTS_FOR_DAY = 40;

  const TOTAL_COST = days * CAR_COSTS_FOR_DAY;

  if (days >= LONG_TERM_VACATION) {
    return TOTAL_COST - LONG_TERM_RENTAL_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_VACATION) {
    return TOTAL_COST - BASIC_DISCOUNT;
  }

  return TOTAL_COST;
}

module.exports = calculateRentalCost;
