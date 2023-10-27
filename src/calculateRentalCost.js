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
  // write code here
  const DISC_AFTER_THREE = 20;
  const DISC_AFTER_SEVEN = 50;
  const DAYS_FOR_DISC_AFTER_THREE = 3;
  const DAYS_FOR_DISC_AFTER_SEVEN = 7;
  const BAISIC_COST = 40;
  const totalDaysCost = BAISIC_COST * days;

  if (days >= DAYS_FOR_DISC_AFTER_SEVEN) {
    return totalDaysCost - DISC_AFTER_SEVEN;
  }

  if (days >= DAYS_FOR_DISC_AFTER_THREE) {
    return totalDaysCost - DISC_AFTER_THREE;
  }

  return totalDaysCost;
}

module.exports = calculateRentalCost;
