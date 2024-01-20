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
const COST_PER_DAY = 40;
const ZERO = 0;
const THREE_DAYS = 3;
const SEVEN_DAYS = 7;
const THREE_DAYS_DISCOUNT = 20;
const SEVEN_DAYS_DISCOUNT = 30;

function calculateRentalCost(days) {
  let discount = ZERO;

  if (days >= THREE_DAYS) {
    discount += THREE_DAYS_DISCOUNT;

    if (days >= SEVEN_DAYS) {
      discount += SEVEN_DAYS_DISCOUNT;
    }
  }

  return (days * COST_PER_DAY) - discount;
}

module.exports = calculateRentalCost;
