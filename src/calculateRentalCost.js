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
  const dallyRent = 40;
  const offsevenDays = 50;
  const offthreeDays = 20;
  const maxOffPeriod = 7;
  const minOffPeriod = 3;

  if (days >= maxOffPeriod) {
    return days * dallyRent - offsevenDays;
  }

  if (days >= minOffPeriod) {
    return days * dallyRent - offthreeDays;
  }

  return days * dallyRent;
}

module.exports = calculateRentalCost;
